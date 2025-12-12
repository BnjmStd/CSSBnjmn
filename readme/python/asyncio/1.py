import subprocess
import threading
import asyncio

# from fastapi import FastAPI

# app = FastAPI()


def run_process():
    def reader(pipe, buffer, label):
        for line in iter(pipe.readline, b""):
            line = line.decode("utf-8", "replace")
            print(f"{label}: {line}", end="")
            buffer.append(line)
        pipe.close()

    process = subprocess.Popen(
        [
            "bash",
            "-c",
            "for i in {1..5}; do echo stdout $i; echo stderr $i >&2; sleep 1; done",
        ],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )

    stdout_buffer = []
    stderr_buffer = []

    t1 = threading.Thread(target=reader, args=(process.stdout, stdout_buffer, "STDOUT"))
    t2 = threading.Thread(target=reader, args=(process.stderr, stderr_buffer, "STDERR"))

    t1.start()
    t2.start()

    process.wait()
    t1.join()
    t2.join()

    return {
        "returncode": process.returncode,
        "stdout": "".join(stdout_buffer),
        "stderr": "".join(stderr_buffer),
    }


# @app.get("/run")
async def run():
    loop = asyncio.get_running_loop()
    result = await loop.run_in_executor(None, run_process)
    return result
