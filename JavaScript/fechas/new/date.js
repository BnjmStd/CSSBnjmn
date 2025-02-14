// pollyfiils = biblioteca, que da la funcionalidad

import { Temporal } from 'temporal-pollyfills'


// temporal now

const instant = Temporal.Now.instant();
const timeZone = Temporal.Now.timeZone();
const datePlain = Temporal.Now.PlainDate.from({ year: 2021, month: 10, day: 10 });

instant.add({ seconds: 1, days: 10, hours: 24 }).toString();


// visiesto
datePlain.inLeapYear

// duración


const duration = Temporal.Duration.from({
    hours: 10,
    minutes: 10,
})

duration.total({ unit: 'minutes' })