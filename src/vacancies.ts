interface Vacancy {
    id: number;
    logo: string;
    title: string;
    name: string;
    location: string;
    isFullTime: boolean;
    date: string;
}

export const vacancies: Vacancy[] = [
    {
        id: 1,
        logo: "img/apple.png",
        title: "Apple Main Manager",
        name: "Apple Inc.",
        location: "Los Angeles",
        isFullTime: true,
        date: "April 12, 2020",
    },
    {
        id: 2,
        logo: "img/nike.png",
        title: "Nike Product Manager",
        name: "Nike",
        location: "Washington",
        isFullTime: true,
        date: "April 12, 2020",
    },
    {
        id: 3,
        logo: "img/amazon.png",
        title: "Amazon Wirehouse Manager",
        name: "Amazon",
        location: "San Francisco",
        isFullTime: false,
        date: "April 12, 2020",
    },
    {
        id: 4,
        logo: "img/twitter.png",
        title: "Twitter Execute Manager",
        name: "Twitter",
        location: "Los Angeles",
        isFullTime: true,
        date: "April 12, 2020",
    },
];
