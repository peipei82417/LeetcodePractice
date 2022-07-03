const data = [
    {
        id: 1,
        state: "Georgia",
        city: "Attleboro",
        type: "Apartment",
        price: 218,
    },
    // {
    //     id: 2,
    //     state: "Wyoming",
    //     city: "Enterprise",
    //     type: "Townhomes",
    //     price: 696,
    // },
    // {
    //     id: 3,
    //     state: "Montana",
    //     city: "South Hill",
    //     type: "Townhomes",
    //     price: 1190,
    // },
    {
        id: 4,
        state: "Georgia",
        city: "Attleboro",
        type: "Condo",
        price: 150,
    },
    {
        id: 5,
        state: "Georgia",
        city: "Savannah",
        type: "Single-family",
        price: 318,
    },
    {
        id: 6,
        state: "Georgia",
        city: "Columbus",
        type: "Condo",
        price: 200,
    },
    // {
    //     id: 7,
    //     state: "Wyoming",
    //     city: "Enterprise",
    //     type: "Single-family",
    //     price: 700,
    // },
    // {
    //     id: 8,
    //     state: "Wyoming",
    //     city: "Enterprise",
    //     type: "Condo",
    //     price: 700,
    // },
    // {
    //     id: 9,
    //     state: "Wyoming",
    //     city: "Enterprise",
    //     type: "Condo",
    //     price: 1000,
    // },
    // {
    //     id: 10,
    //     state: "Montana",
    //     city: "South Hill",
    //     type: "Single-family",
    //     price: 800,
    // },
];
resultByStateAndCity = {
    Georgia: {
        Attleboro: [
            {
                id: 1,
                state: "Georgia",
                city: "Attleboro",
                type: "Apartment",
                price: 218,
            },
            {
                id: 4,
                state: "Georgia",
                city: "Attleboro",
                type: "Condo",
                price: 150,
            },
        ],
        Columbus: [
            {
                id: 6,
                state: "Georgia",
                city: "Columbus",
                type: "Condo",
                price: 200,
            },
        ],
        Savannah: [
            {
                id: 5,
                state: "Georgia",
                city: "Savannah",
                type: "Single-family",
                price: 318,
            },
        ],
    },
    Wyoming: {
        Enterprise: [
            {
                id: 2,
                state: "Wyoming",
                city: "Enterprise",
                type: "Townhomes",
                price: 696,
            },
            {
                id: 7,
                state: "Wyoming",
                city: "Enterprise",
                type: "Single-family",
                price: 700,
            },
            {
                id: 8,
                state: "Wyoming",
                city: "Enterprise",
                type: "Condo",
                price: 700,
            },
            {
                id: 9,
                state: "Wyoming",
                city: "Enterprise",
                type: "Condo",
                price: 1000,
            },
        ],
    },
    Montana: {
        "South Hill": [
            {
                id: 3,
                state: "Montana",
                city: "South Hill",
                type: "Townhomes",
                price: 1190,
            },
            {
                id: 10,
                state: "Montana",
                city: "South Hill",
                type: "Single-family",
                price: 800,
            },
        ],
    },
};

resultByType = {
    Apartment: [
        {
            id: 1,
            state: "Georgia",
            city: "Attleboro",
            type: "Apartment",
            price: 218,
        },
    ],
    Townhomes: [
        {
            id: 2,
            state: "Wyoming",
            city: "Enterprise",
            type: "Townhomes",
            price: 696,
        },
        {
            id: 3,
            state: "Montana",
            city: "South Hill",
            type: "Townhomes",
            price: 1190,
        },
    ],
    Condo: [
        {
            id: 4,
            state: "Georgia",
            city: "Attleboro",
            type: "Condo",
            price: 150,
        },
        {
            id: 6,
            state: "Georgia",
            city: "Columbus",
            type: "Condo",
            price: 200,
        },
        {
            id: 8,
            state: "Wyoming",
            city: "Enterprise",
            type: "Condo",
            price: 700,
        },
        {
            id: 9,
            state: "Wyoming",
            city: "Enterprise",
            type: "Condo",
            price: 1000,
        },
    ],
    "Single-family": [
        {
            id: 5,
            state: "Georgia",
            city: "Savannah",
            type: "Single-family",
            price: 318,
        },
        {
            id: 7,
            state: "Wyoming",
            city: "Enterprise",
            type: "Single-family",
            price: 700,
        },
        {
            id: 10,
            state: "Montana",
            city: "South Hill",
            type: "Single-family",
            price: 800,
        },
    ],
};

/*
State & City
  State        City       Houses     Avg. price
 Georgia    Attleboro        2          184
 Georgia     Columbus        1          200
 Georgia     Savannah        1          318
 Wyoming    Enterprise       4          774
 Montana    South Hill       2          995
*/
/*
   Type        Houses     Avg. price
 Apartment       1           218
 Townhomes       2           943
   Condo         4          512.5
Single-family    3           606
*/
const regroupByMultipleFields = (data, fields) => {};

const makeTableRow = (obj) => {
    const row = {
        State: "",
        City: "",
        Type: "",
        Houses: "",
        "Avg. Price": "",
    };
};

const groupByProperties = (data, properties) => {
    const groups = [];
    for (let i = 0, len = data.length; i < len; i += 1) {
        const obj = data[i];
        if (groups.length == 0) {
            groups.push([obj]);
        } else {
            let equalGroup = false;
            for (let a = 0, glen = groups.length; a < glen; a += 1) {
                const group = groups[a];
                let equal = true;
                const firstElement = group[0];
                properties.forEach(function (property) {
                    if (firstElement[property] !== obj[property]) {
                        equal = false;
                    }
                });
                if (equal) {
                    equalGroup = group;
                }
            }
            if (equalGroup) {
                equalGroup.push(obj);
            } else {
                groups.push([obj]);
            }
        }
    }
    return groups;
};

const groupByFields = (data, fields) => {
    console.log(fields);
    const groups = [],
        len = data.length;
    for (let i = 0; i < len; i += 1) {
        const obj = data[i];
        if (groups.length === 0) {
            groups.push([obj]);
        } else {
            let equalGroup = false;
            for (let a = 0, glen = groups.length; a < glen; a += 1) {
                const group = groups[a];
                let equal = true;
                const firstElement = group[0];
                fields.forEach((field) => {
                    if (firstElement[field] !== obj[field]) {
                        equal = false;
                    }
                });
                if (equal) {
                    equalGroup = group;
                }
            }
            if (equalGroup) {
                equalGroup.push(obj);
            } else {
                groups.push([obj]);
            }
        }
    }
    return groups;
};

const result = groupByFields(data, ["state", "city"]);
console.log(data);
// console.log(result);
const tableRow = makeTableRow(resultByType);
