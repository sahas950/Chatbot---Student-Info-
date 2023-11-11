const dateSlots = [
    {
        day: "MON",
        date: "10",
        month: "APRIL",
    },
    {
        day: "TUE",
        date: "12",
        month: "MAY",
    },
    {
        day: "WED",
        date: "8",
        month: "JUNE",
    },
    {
        day: "THU",
        date: "6",
        month: "JULY",
    },
];

const timeSlots = [
    {
        phase: "MORNING",
        data: [
            {
                time: "08:00",
                label: "AM",
            },
            {
                time: "10:00",
                label: "AM",
            },
        ],
    },
    {
        phase: "AFTERNOON",
        data: [
            {
                time: "12:00",
                label: "PM",
            },
            {
                time: "04:00",
                label: "PM",
            },
        ],
    },
];

const data = {
    timeSlots,
    dateSlots
}

export default data;