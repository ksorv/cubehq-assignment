import {faker} from "@faker-js/faker";
import {Customer} from "../shared/typings";

const customerGenerator = (count: number): Array<Customer> => {
    return Array.from({length: count}, () =>
        ({
            id: faker.string.uuid(),
            name: faker.person.fullName(),
            title: faker.person.jobTitle(),
            address: {
                street: faker.location.streetAddress(),
                city: faker.location.city(),
                state: faker.location.state(),
                zip: faker.location.zipCode(),
                country: faker.location.country()
            },
            avatar: faker.image.avatar(),
            imgHost: 'https://picsum.photos/600/400?random=',
            switchTime: 10000
        })
    )
}

let customers: Array<Customer> = [
    {
        "id": "fbf620a0-4fd6-4443-a0d3-c70ea41e4b71",
        "name": "Mr. Sheldon Stark",
        "title": "Legacy Directives Coordinator",
        "address": {
            "street": "723 Cole Estate",
            "city": "Wolfchester",
            "state": "New York",
            "zip": "18307-9244",
            "country": "United States Minor Outlying Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1100.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "593bc683-1045-4c45-a683-c848ba326dc5",
        "name": "Leslie Mills",
        "title": "Legacy Accountability Planner",
        "address": {
            "street": "933 Koelpin Center",
            "city": "Bowling Green",
            "state": "Maine",
            "zip": "88522",
            "country": "Latvia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/560.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5294ee69-86f8-43d3-9a8c-a46e54572100",
        "name": "Mercedes Kuphal",
        "title": "District Intranet Director",
        "address": {
            "street": "64412 Emery Forges",
            "city": "Tremaynestad",
            "state": "New Mexico",
            "zip": "54961-1252",
            "country": "Turkmenistan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1081.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "32e0b625-3725-4dcf-8d5b-ec71c751202f",
        "name": "Franklin Koelpin",
        "title": "Human Branding Associate",
        "address": {
            "street": "306 Pascale Way",
            "city": "Reno",
            "state": "Iowa",
            "zip": "07965-7123",
            "country": "Burundi"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/695.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b6299605-f8ed-4988-af01-260d0658bfc3",
        "name": "Margie Homenick",
        "title": "District Markets Executive",
        "address": {
            "street": "44962 Fannie Extension",
            "city": "Gaithersburg",
            "state": "New Hampshire",
            "zip": "66746-1092",
            "country": "Macao"
        },
        "avatar": "https://avatars.githubusercontent.com/u/61489551",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "df7d80cc-6199-454b-8be0-c27182e4411d",
        "name": "Guadalupe Prosacco",
        "title": "Legacy Research Specialist",
        "address": {
            "street": "4313 Nyasia Shore",
            "city": "Ondrickatown",
            "state": "Illinois",
            "zip": "81454",
            "country": "Virgin Islands, U.S."
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/306.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "86291a75-d8d6-4658-925e-8a5d56b14a78",
        "name": "Mr. Leon Goodwin",
        "title": "National Research Director",
        "address": {
            "street": "25746 Louisa Isle",
            "city": "West Hortenseland",
            "state": "Ohio",
            "zip": "62302-7432",
            "country": "Albania"
        },
        "avatar": "https://avatars.githubusercontent.com/u/23583026",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "93c2a5da-3e35-4289-b570-5bcb63d667de",
        "name": "Lorena Medhurst",
        "title": "Direct Configuration Associate",
        "address": {
            "street": "5894 Timmy Overpass",
            "city": "West Bartholome",
            "state": "Minnesota",
            "zip": "95679-8597",
            "country": "Ethiopia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/922.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d0f47d12-f719-45fc-b7f2-9a6a866e4cc8",
        "name": "Erin Hettinger",
        "title": "Direct Branding Coordinator",
        "address": {
            "street": "94215 Schamberger Crest",
            "city": "Murraychester",
            "state": "Arkansas",
            "zip": "96193",
            "country": "Saint Pierre and Miquelon"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/39.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f34b7579-9453-4dc9-9345-585b52f5a183",
        "name": "Kellie Kuvalis",
        "title": "Chief Branding Associate",
        "address": {
            "street": "7681 Johns Spring",
            "city": "Adamsstead",
            "state": "Mississippi",
            "zip": "34638-2302",
            "country": "Djibouti"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/413.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "84664a37-08ef-4003-a74b-612ba20f4cf1",
        "name": "Kate Kautzer",
        "title": "Forward Identity Coordinator",
        "address": {
            "street": "9080 Blanca Corner",
            "city": "West Hosea",
            "state": "Louisiana",
            "zip": "76022",
            "country": "Bosnia and Herzegovina"
        },
        "avatar": "https://avatars.githubusercontent.com/u/70410508",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "00c9628c-4da8-4c5b-9496-f79e7850635a",
        "name": "Marcella Douglas",
        "title": "Internal Factors Strategist",
        "address": {
            "street": "640 Nitzsche Falls",
            "city": "Greenholtside",
            "state": "Michigan",
            "zip": "51811-0808",
            "country": "Mauritania"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/701.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "59b0d01a-fcb2-4962-850b-3312d7abec12",
        "name": "Erma Sauer",
        "title": "Senior Metrics Supervisor",
        "address": {
            "street": "432 Stuart Terrace",
            "city": "Eagan",
            "state": "New York",
            "zip": "78890",
            "country": "Faroe Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/66944839",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "abbcc9eb-5499-4efa-80ee-5cfd926b3506",
        "name": "Dominick Nitzsche",
        "title": "Human Paradigm Developer",
        "address": {
            "street": "3490 Connelly Field",
            "city": "Petaluma",
            "state": "South Dakota",
            "zip": "12533-8205",
            "country": "Greece"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/827.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "de50905c-dce5-48dc-8ff6-306a59c32a03",
        "name": "Leticia Lowe",
        "title": "Product Tactics Supervisor",
        "address": {
            "street": "19439 Katelynn Spur",
            "city": "Port Estelletown",
            "state": "Missouri",
            "zip": "80765",
            "country": "Sierra Leone"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1189.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "78ad8ce6-ee6c-4216-b0ac-12e3746622be",
        "name": "Edith Stoltenberg DDS",
        "title": "Human Infrastructure Coordinator",
        "address": {
            "street": "15091 Faustino Lakes",
            "city": "Baldwin Park",
            "state": "Tennessee",
            "zip": "82406",
            "country": "Thailand"
        },
        "avatar": "https://avatars.githubusercontent.com/u/73216314",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "317afa21-2b93-4523-a17d-ece2d5cb2a43",
        "name": "Lynn Rutherford",
        "title": "Global Intranet Agent",
        "address": {
            "street": "58459 Estel Underpass",
            "city": "West Lucasborough",
            "state": "Utah",
            "zip": "73639-8205",
            "country": "Curacao"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/99.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "57aea25b-5087-45c2-a512-7433d88b14ee",
        "name": "Alfonso Kemmer",
        "title": "Future Intranet Planner",
        "address": {
            "street": "24263 Judy Streets",
            "city": "North Orie",
            "state": "Arizona",
            "zip": "16436",
            "country": "Heard Island and McDonald Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/441.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d323611e-f6e0-482e-a9e1-6cb0e6277352",
        "name": "Mrs. Daisy Effertz",
        "title": "Future Communications Supervisor",
        "address": {
            "street": "484 O'Keefe Junction",
            "city": "Rolfsonview",
            "state": "Wyoming",
            "zip": "82205",
            "country": "Saudi Arabia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/94913367",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2c741e40-e20f-47bc-9fe1-8a9193aebb32",
        "name": "Dr. Daryl Blick",
        "title": "Forward Interactions Strategist",
        "address": {
            "street": "49601 Mohamed Ville",
            "city": "West Graham",
            "state": "Michigan",
            "zip": "02605-1894",
            "country": "Slovenia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/419.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "30a74a9b-0205-4726-82a6-65e1ecae4159",
        "name": "Jorge Beatty",
        "title": "Customer Group Representative",
        "address": {
            "street": "5411 Torrey Cliffs",
            "city": "Bednarshire",
            "state": "Colorado",
            "zip": "65320-6831",
            "country": "Chad"
        },
        "avatar": "https://avatars.githubusercontent.com/u/24262460",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0f5e0608-6b7f-4596-9a02-b1a29864b057",
        "name": "Verna Wiza",
        "title": "District Tactics Developer",
        "address": {
            "street": "7665 Turcotte Drive",
            "city": "West Larryborough",
            "state": "Utah",
            "zip": "74728-2421",
            "country": "Taiwan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/462.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e7e2889d-f489-4c0b-a00a-0ca9fb88dc2b",
        "name": "Miss Elvira Kreiger",
        "title": "Product Security Consultant",
        "address": {
            "street": "247 Claire Drive",
            "city": "Creminberg",
            "state": "Michigan",
            "zip": "32933",
            "country": "Somalia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/85493026",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "96d79080-b6f1-4e5b-ae7d-a93c79678b96",
        "name": "Ryan Stoltenberg DVM",
        "title": "Future Operations Engineer",
        "address": {
            "street": "708 Valentin Falls",
            "city": "Denver",
            "state": "Alaska",
            "zip": "99019",
            "country": "Turkey"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1124.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fd3224e1-c633-499e-baf0-a6e42c5da973",
        "name": "Kate Blanda",
        "title": "Product Functionality Supervisor",
        "address": {
            "street": "5360 Tiara Centers",
            "city": "Fort Rossiehaven",
            "state": "Nevada",
            "zip": "62397-3968",
            "country": "Marshall Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/580.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "cc2f7d2e-c7a8-44af-9b62-7e74c4550de9",
        "name": "Florence Wilkinson",
        "title": "Global Mobility Consultant",
        "address": {
            "street": "39240 Elva Points",
            "city": "Taraport",
            "state": "Maine",
            "zip": "42126",
            "country": "Montenegro"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/877.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "384b7da4-eae8-460b-a10d-b4d8ed2005b7",
        "name": "Beverly Grant",
        "title": "Direct Configuration Orchestrator",
        "address": {
            "street": "613 Elyssa Terrace",
            "city": "Streichboro",
            "state": "Louisiana",
            "zip": "79608-2873",
            "country": "Seychelles"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/543.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "215a870e-caf5-4445-8b9f-8b9ad0e95e4d",
        "name": "Mercedes Lebsack",
        "title": "International Data Assistant",
        "address": {
            "street": "48467 Volkman Hill",
            "city": "Rockwall",
            "state": "Nebraska",
            "zip": "24038",
            "country": "Botswana"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1131.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9d86f4e2-d8a7-43a9-a727-674eabb78625",
        "name": "Miss Donna Reilly",
        "title": "Dynamic Interactions Administrator",
        "address": {
            "street": "4774 Gerda Islands",
            "city": "Abshireview",
            "state": "Wyoming",
            "zip": "01469-0297",
            "country": "Saint Pierre and Miquelon"
        },
        "avatar": "https://avatars.githubusercontent.com/u/67032377",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5ab19741-fa7d-4246-8aa9-e6cc8d5b7403",
        "name": "Dr. Timmy Kessler",
        "title": "Forward Response Manager",
        "address": {
            "street": "2623 Koss Lock",
            "city": "Clairtown",
            "state": "New Mexico",
            "zip": "70671",
            "country": "Montenegro"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/31.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1cf18ed1-855c-49b7-b536-ab4513d34e83",
        "name": "Norman Zemlak",
        "title": "Senior Accountability Engineer",
        "address": {
            "street": "598 Bergstrom Forest",
            "city": "Jadenton",
            "state": "Utah",
            "zip": "07963-7684",
            "country": "Belarus"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/364.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1dced4ea-b256-4607-bc51-1dbac93cefea",
        "name": "Tara Braun Sr.",
        "title": "District Usability Technician",
        "address": {
            "street": "596 Rosalia Coves",
            "city": "Fort Pascaleside",
            "state": "New Jersey",
            "zip": "21923-7956",
            "country": "Albania"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/853.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7ba6aee0-7457-4d12-9508-dbd70cd6cd59",
        "name": "Margaret Murphy",
        "title": "Dynamic Security Producer",
        "address": {
            "street": "99602 Stroman Hills",
            "city": "Hartford",
            "state": "Vermont",
            "zip": "90499-9798",
            "country": "Mayotte"
        },
        "avatar": "https://avatars.githubusercontent.com/u/59137427",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c873fa1b-d625-4226-8448-9acb0b46bb9c",
        "name": "Leona Metz",
        "title": "Product Functionality Engineer",
        "address": {
            "street": "6665 Lang Turnpike",
            "city": "Cheektowaga",
            "state": "Maryland",
            "zip": "85503",
            "country": "Palestine"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/638.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4af7a174-1d33-40b0-b90b-6bcfa3bf1363",
        "name": "Denise Emard",
        "title": "Direct Marketing Executive",
        "address": {
            "street": "800 Romaguera Shoals",
            "city": "Kerlukeland",
            "state": "Nevada",
            "zip": "13008-3796",
            "country": "Canada"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/96.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "55dcb62f-a385-401a-820a-d9d0c6714a96",
        "name": "Dr. Ed Robel",
        "title": "Central Communications Designer",
        "address": {
            "street": "874 Fahey Gateway",
            "city": "The Hammocks",
            "state": "Kentucky",
            "zip": "65660",
            "country": "Lebanon"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/383.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "66273650-e66b-46c3-917c-118553bebcb2",
        "name": "Terrell Olson",
        "title": "National Quality Engineer",
        "address": {
            "street": "692 Bernadine Villages",
            "city": "Jayborough",
            "state": "Missouri",
            "zip": "70754-9310",
            "country": "Dominica"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/328.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fa18f910-7349-4793-acc4-fd2d3f2a1d86",
        "name": "Tasha Fay",
        "title": "Investor Identity Manager",
        "address": {
            "street": "22217 Garrison Turnpike",
            "city": "Smithamfurt",
            "state": "Maryland",
            "zip": "70026-1848",
            "country": "French Guiana"
        },
        "avatar": "https://avatars.githubusercontent.com/u/13194563",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b21eae2a-f336-4032-ae33-ee1d394efe61",
        "name": "Norma Yost",
        "title": "Corporate Markets Technician",
        "address": {
            "street": "248 Brakus Flats",
            "city": "Israelfort",
            "state": "Connecticut",
            "zip": "00977-9076",
            "country": "Mauritania"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/871.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ee8a66cb-ea73-480f-912d-ab6c78defbca",
        "name": "Bridget Bauch",
        "title": "International Research Producer",
        "address": {
            "street": "16440 Feil Crest",
            "city": "Diamond Bar",
            "state": "Mississippi",
            "zip": "83209-9835",
            "country": "Tajikistan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/406.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "587efadf-e873-485b-94f1-563ff9fb8f1e",
        "name": "Dr. Ana Ruecker",
        "title": "Global Tactics Designer",
        "address": {
            "street": "5449 Stone Lane",
            "city": "Waterbury",
            "state": "Kentucky",
            "zip": "68830-3225",
            "country": "Kenya"
        },
        "avatar": "https://avatars.githubusercontent.com/u/86005928",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "bb114e5c-a00e-45e9-94b1-e63c38228243",
        "name": "Dr. Nicole Lynch",
        "title": "Direct Configuration Specialist",
        "address": {
            "street": "2384 Pouros Street",
            "city": "Lake Eino",
            "state": "Massachusetts",
            "zip": "82453-3818",
            "country": "Dominican Republic"
        },
        "avatar": "https://avatars.githubusercontent.com/u/87282349",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b7d4788c-ff61-4714-8a4e-663ac8c7f4b7",
        "name": "Vincent Heller",
        "title": "Human Configuration Director",
        "address": {
            "street": "403 Trent Estates",
            "city": "Providence",
            "state": "Maine",
            "zip": "90293",
            "country": "Trinidad and Tobago"
        },
        "avatar": "https://avatars.githubusercontent.com/u/94779479",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f1b2e5b3-1e32-4d25-a25d-664640065770",
        "name": "Amy Wilkinson",
        "title": "Internal Configuration Architect",
        "address": {
            "street": "2271 Golda Freeway",
            "city": "East Stephaniaview",
            "state": "Oklahoma",
            "zip": "03337",
            "country": "Guadeloupe"
        },
        "avatar": "https://avatars.githubusercontent.com/u/40086741",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "14919418-304f-479e-bcc9-1b2937290780",
        "name": "Lynne Brown",
        "title": "Corporate Response Facilitator",
        "address": {
            "street": "358 Beer Square",
            "city": "Boise City",
            "state": "Alabama",
            "zip": "41778",
            "country": "Belize"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1232.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "44bbbb03-3bd0-458e-af46-b3a033b4604f",
        "name": "Carroll Lebsack",
        "title": "Legacy Solutions Representative",
        "address": {
            "street": "62696 Schneider Corner",
            "city": "Mohrton",
            "state": "New York",
            "zip": "54339",
            "country": "United Kingdom"
        },
        "avatar": "https://avatars.githubusercontent.com/u/86774364",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "478e990d-e874-433e-b340-faadd5e28e1d",
        "name": "Delbert Koelpin-King",
        "title": "Central Tactics Supervisor",
        "address": {
            "street": "96712 Kozey Square",
            "city": "D'Amorecester",
            "state": "North Dakota",
            "zip": "55654-2500",
            "country": "Gambia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/34839963",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e6634a24-3fe1-4a30-98b3-34a85ca46f79",
        "name": "Felipe Wilkinson PhD",
        "title": "Customer Response Designer",
        "address": {
            "street": "33141 Breitenberg Row",
            "city": "Kossfurt",
            "state": "Indiana",
            "zip": "15422",
            "country": "Jersey"
        },
        "avatar": "https://avatars.githubusercontent.com/u/15238033",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ad964837-9f8d-457c-881f-0f835778b32b",
        "name": "Viola Kling",
        "title": "Future Creative Engineer",
        "address": {
            "street": "9020 Terrill Mills",
            "city": "Nampa",
            "state": "Indiana",
            "zip": "33786-6664",
            "country": "Bhutan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1120.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8751c633-4452-4930-b6c4-17bf2cf09a4b",
        "name": "Phyllis Mertz",
        "title": "Direct Metrics Administrator",
        "address": {
            "street": "6783 Herzog Glen",
            "city": "West Jo",
            "state": "Texas",
            "zip": "88212",
            "country": "Myanmar"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/792.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e5b088bc-7daa-4e79-b3e8-caa40322bbff",
        "name": "Samuel Pacocha",
        "title": "Principal Assurance Analyst",
        "address": {
            "street": "887 Harmon Vista",
            "city": "Shoreline",
            "state": "Vermont",
            "zip": "46546",
            "country": "Malawi"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/72.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "db7edfda-28f8-4349-914c-a2d9359bd426",
        "name": "Billie Kub",
        "title": "Lead Tactics Officer",
        "address": {
            "street": "7507 Schaefer Mill",
            "city": "West Lilyhaven",
            "state": "North Carolina",
            "zip": "58748-3977",
            "country": "Democratic Republic of the Congo"
        },
        "avatar": "https://avatars.githubusercontent.com/u/33712982",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1370c667-3a2b-41de-9aa8-cf36b9057b18",
        "name": "Gilberto Padberg",
        "title": "Lead Branding Producer",
        "address": {
            "street": "7883 Treva Locks",
            "city": "Delaneychester",
            "state": "South Dakota",
            "zip": "58598-3913",
            "country": "Myanmar"
        },
        "avatar": "https://avatars.githubusercontent.com/u/9470806",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "68841bcf-bb9a-4a0b-b241-c628f9d11ef5",
        "name": "Jessica Walsh",
        "title": "Forward Solutions Coordinator",
        "address": {
            "street": "6081 Dooley Avenue",
            "city": "Sauerview",
            "state": "Mississippi",
            "zip": "80578",
            "country": "Belize"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/746.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b26bdf87-6c32-4058-9fa8-199749ae11cd",
        "name": "Shelley Toy V",
        "title": "Internal Identity Associate",
        "address": {
            "street": "6288 Watsica Garden",
            "city": "Tuckahoe",
            "state": "North Dakota",
            "zip": "69647",
            "country": "Martinique"
        },
        "avatar": "https://avatars.githubusercontent.com/u/71051881",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "39e7db5a-dabe-4e8e-bb69-aa4242afde82",
        "name": "Lee Jerde",
        "title": "Lead Creative Strategist",
        "address": {
            "street": "5878 Pollich Shoals",
            "city": "South Rupert",
            "state": "Michigan",
            "zip": "61685-0822",
            "country": "Niger"
        },
        "avatar": "https://avatars.githubusercontent.com/u/50865305",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d965a43c-053e-450b-bc9c-6b0dc56afda2",
        "name": "Tommie Gutkowski I",
        "title": "Senior Intranet Strategist",
        "address": {
            "street": "278 Athena Highway",
            "city": "Dayanamouth",
            "state": "Montana",
            "zip": "76036-6528",
            "country": "Suriname"
        },
        "avatar": "https://avatars.githubusercontent.com/u/24575067",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1e75b538-2b57-480d-8c76-759168cee357",
        "name": "Naomi Simonis",
        "title": "Central Integration Technician",
        "address": {
            "street": "4869 Stanley Loaf",
            "city": "Fort Ryleighstead",
            "state": "South Carolina",
            "zip": "63867-3600",
            "country": "Liechtenstein"
        },
        "avatar": "https://avatars.githubusercontent.com/u/89132683",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b4c0d1bf-b2b6-4591-a5ee-6cfc13276b70",
        "name": "Jimmy Bailey",
        "title": "Regional Implementation Facilitator",
        "address": {
            "street": "1630 Jarret Loaf",
            "city": "Kaiaport",
            "state": "New Mexico",
            "zip": "06616-0152",
            "country": "Bulgaria"
        },
        "avatar": "https://avatars.githubusercontent.com/u/93510948",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "80e3825d-f949-4f49-9e73-614aeed8c55b",
        "name": "Becky Hansen",
        "title": "Global Brand Supervisor",
        "address": {
            "street": "9033 Melany Flats",
            "city": "New Laurianne",
            "state": "Wisconsin",
            "zip": "88489",
            "country": "Burkina Faso"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1249.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "92ce12c2-ada5-4af5-bc4d-1700e518ef28",
        "name": "Lynne Grimes Sr.",
        "title": "Corporate Markets Administrator",
        "address": {
            "street": "7002 Stanton Rapids",
            "city": "Port Emmaview",
            "state": "Iowa",
            "zip": "33093",
            "country": "Pakistan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/78458167",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9ce520cd-db47-42c4-b79b-04140f608c71",
        "name": "Melanie Osinski DVM",
        "title": "Investor Infrastructure Planner",
        "address": {
            "street": "62492 Russ Field",
            "city": "Rasheedbury",
            "state": "Minnesota",
            "zip": "91401-3823",
            "country": "Australia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1019.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "24438ca5-bc1b-470a-bda0-da893cd23c07",
        "name": "Gertrude Glover MD",
        "title": "International Optimization Architect",
        "address": {
            "street": "7388 Gutmann Shores",
            "city": "Herminiaview",
            "state": "South Carolina",
            "zip": "82799-3023",
            "country": "Mexico"
        },
        "avatar": "https://avatars.githubusercontent.com/u/61526545",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4988d379-c0ff-4097-9135-5f4aea982f8d",
        "name": "Lionel VonRueden",
        "title": "Corporate Configuration Producer",
        "address": {
            "street": "58050 Rodriguez Branch",
            "city": "East Samanta",
            "state": "Tennessee",
            "zip": "32341",
            "country": "Lesotho"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/200.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d565b2fa-d54b-419b-a8f3-9acb4ba77984",
        "name": "Alma Bosco",
        "title": "Global Factors Designer",
        "address": {
            "street": "19167 Kiera Curve",
            "city": "Ernestinefurt",
            "state": "New Jersey",
            "zip": "67964",
            "country": "Puerto Rico"
        },
        "avatar": "https://avatars.githubusercontent.com/u/87306873",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "79cef8a2-ac5d-44a3-ae59-d9b378af078f",
        "name": "Madeline Emard-Rogahn",
        "title": "Customer Security Orchestrator",
        "address": {
            "street": "346 Donnelly Junctions",
            "city": "Raphaelleland",
            "state": "Alaska",
            "zip": "94498",
            "country": "Italy"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1011.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "02803994-5863-4cbb-9e99-80ab23b5b181",
        "name": "Miss Silvia Franecki",
        "title": "Forward Brand Officer",
        "address": {
            "street": "607 Kutch Crossroad",
            "city": "Fort Nova",
            "state": "Arkansas",
            "zip": "40453-4313",
            "country": "Sao Tome and Principe"
        },
        "avatar": "https://avatars.githubusercontent.com/u/87949806",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e356c7e5-adb5-4c3e-b052-6dbad21eadf6",
        "name": "Jimmy Waelchi",
        "title": "Human Branding Planner",
        "address": {
            "street": "99705 Pablo Land",
            "city": "Greenholthaven",
            "state": "North Carolina",
            "zip": "63977",
            "country": "Serbia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/213.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4fc9f703-8e2b-4547-ab6d-f505119325e2",
        "name": "Dr. Ramiro Champlin",
        "title": "Senior Markets Technician",
        "address": {
            "street": "124 Lang Burg",
            "city": "Doral",
            "state": "Ohio",
            "zip": "24512-7109",
            "country": "Guadeloupe"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/374.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d0012fd5-09a9-4433-a29a-74390e20b71d",
        "name": "Jerome Weissnat",
        "title": "Lead Assurance Consultant",
        "address": {
            "street": "118 Strosin Motorway",
            "city": "West Des Moines",
            "state": "North Dakota",
            "zip": "00920-1336",
            "country": "Cyprus"
        },
        "avatar": "https://avatars.githubusercontent.com/u/25843007",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "833f40d6-1ec3-4a81-9dac-eb6ad6eeddc1",
        "name": "Roberta Sanford",
        "title": "Corporate Applications Officer",
        "address": {
            "street": "597 Howard Road",
            "city": "Gottliebshire",
            "state": "Alabama",
            "zip": "81433-1727",
            "country": "Philippines"
        },
        "avatar": "https://avatars.githubusercontent.com/u/59582870",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "bb9f2a63-d91a-4d81-ba9f-c08f9ccae531",
        "name": "Ms. Bethany Tromp",
        "title": "Regional Response Director",
        "address": {
            "street": "9221 Padberg Ramp",
            "city": "Kirlinfurt",
            "state": "West Virginia",
            "zip": "35114-4087",
            "country": "Finland"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1228.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "db641cc4-ffb0-40ce-999a-58e235c43d63",
        "name": "Taylor Terry",
        "title": "Product Creative Agent",
        "address": {
            "street": "3181 Osinski Ways",
            "city": "Joneston",
            "state": "South Carolina",
            "zip": "49413-5837",
            "country": "Nauru"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/446.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b790b3a3-fea9-4b0b-ab23-019a6a7a6bd5",
        "name": "Marcus Macejkovic",
        "title": "Principal Security Officer",
        "address": {
            "street": "11534 Elwin Fort",
            "city": "East Candice",
            "state": "Illinois",
            "zip": "15184-3805",
            "country": "United States of America"
        },
        "avatar": "https://avatars.githubusercontent.com/u/20267768",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8e981c19-1790-4a4e-99d1-f90ba5537fae",
        "name": "Essie Berge",
        "title": "Chief Implementation Analyst",
        "address": {
            "street": "392 Renee Extension",
            "city": "Des Plaines",
            "state": "Pennsylvania",
            "zip": "60739",
            "country": "Mali"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1087.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7d0832fd-3be0-4ca8-a482-35c2ed96cb94",
        "name": "Kelly Leannon",
        "title": "Senior Applications Associate",
        "address": {
            "street": "63630 Moen Wall",
            "city": "Ellisworth",
            "state": "Pennsylvania",
            "zip": "37704-9684",
            "country": "Kuwait"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/257.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1c82946c-799a-4a6f-aaaf-a91a3845ace5",
        "name": "Alexandra Hegmann V",
        "title": "Lead Data Supervisor",
        "address": {
            "street": "619 Kiana Place",
            "city": "Ceres",
            "state": "Colorado",
            "zip": "54055-5341",
            "country": "Nauru"
        },
        "avatar": "https://avatars.githubusercontent.com/u/56684817",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "702bfa9b-6e9d-46fc-9f40-72c1604d0e51",
        "name": "Bryant Parker",
        "title": "Principal Quality Facilitator",
        "address": {
            "street": "39830 Beatty Mill",
            "city": "East Orange",
            "state": "Rhode Island",
            "zip": "29666",
            "country": "Brunei Darussalam"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/300.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4baff32e-e829-41bc-9288-ef2da0ab6985",
        "name": "Craig Koepp V",
        "title": "Regional Marketing Producer",
        "address": {
            "street": "270 Ritchie Divide",
            "city": "Ezraland",
            "state": "New Mexico",
            "zip": "82692",
            "country": "Nauru"
        },
        "avatar": "https://avatars.githubusercontent.com/u/66116094",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a4003997-87fa-475f-8739-cb7b7c8cec58",
        "name": "Enrique Stokes",
        "title": "Investor Optimization Analyst",
        "address": {
            "street": "126 Hunter Forest",
            "city": "East Nicolette",
            "state": "Nebraska",
            "zip": "25046-0414",
            "country": "Liechtenstein"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/102.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "edfc6d4f-4b60-44d2-be43-bf98a3b0f9aa",
        "name": "Marcella Ondricka",
        "title": "Customer Web Developer",
        "address": {
            "street": "76686 Freeda Underpass",
            "city": "South Willis",
            "state": "Nevada",
            "zip": "41844-5307",
            "country": "Yemen"
        },
        "avatar": "https://avatars.githubusercontent.com/u/93824339",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4bed308d-e603-438f-a2ba-108045947b22",
        "name": "Mario Sauer",
        "title": "Principal Interactions Representative",
        "address": {
            "street": "8419 Bertram Gardens",
            "city": "Lake Jacinthe",
            "state": "Iowa",
            "zip": "03415-2101",
            "country": "Micronesia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/954.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "27594099-ef5e-44f3-add0-7815fe3c8e23",
        "name": "Emma Lebsack",
        "title": "Corporate Group Engineer",
        "address": {
            "street": "15835 Kozey Summit",
            "city": "East Broderickhaven",
            "state": "Washington",
            "zip": "82027-5871",
            "country": "Paraguay"
        },
        "avatar": "https://avatars.githubusercontent.com/u/29505093",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9f1ae54d-7590-408b-9e5f-d0342c957af6",
        "name": "Tyler Larkin",
        "title": "Product Quality Assistant",
        "address": {
            "street": "69460 Bernier Mountain",
            "city": "Centreville",
            "state": "Nebraska",
            "zip": "60409",
            "country": "Nicaragua"
        },
        "avatar": "https://avatars.githubusercontent.com/u/46405235",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0f1f65ca-d8b3-4a83-ba9f-327a6801eea8",
        "name": "Holly Pagac",
        "title": "Principal Assurance Assistant",
        "address": {
            "street": "53104 Maxime River",
            "city": "Nicolasworth",
            "state": "Missouri",
            "zip": "38735-5154",
            "country": "Andorra"
        },
        "avatar": "https://avatars.githubusercontent.com/u/4525501",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3a5a5e06-7b90-4994-b3c5-e6a743f4d286",
        "name": "Candace Dibbert",
        "title": "Corporate Response Consultant",
        "address": {
            "street": "9304 Lubowitz Ramp",
            "city": "Maximilianburgh",
            "state": "California",
            "zip": "49594-1379",
            "country": "Curacao"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/223.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "66588f71-7cfc-4bad-9edd-511c9f9eff5b",
        "name": "Marian Parker",
        "title": "Forward Tactics Strategist",
        "address": {
            "street": "6343 Schultz Roads",
            "city": "Roanoke",
            "state": "Louisiana",
            "zip": "50484-8393",
            "country": "Hong Kong"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/54.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "bc1d2b5f-8761-44ae-be6f-4718517c6946",
        "name": "Terry Schaden",
        "title": "Direct Factors Director",
        "address": {
            "street": "332 Bret Loop",
            "city": "South Randall",
            "state": "Utah",
            "zip": "38029-8934",
            "country": "Jamaica"
        },
        "avatar": "https://avatars.githubusercontent.com/u/13270294",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a1986a22-724c-4e99-a6b1-43fc21a9945f",
        "name": "Candace Franecki",
        "title": "Lead Brand Designer",
        "address": {
            "street": "99319 Mante Lake",
            "city": "Alvenafurt",
            "state": "Washington",
            "zip": "11450-6868",
            "country": "Morocco"
        },
        "avatar": "https://avatars.githubusercontent.com/u/44768257",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6786ad7c-260e-4cce-a823-384ff9d03323",
        "name": "Paulette Leuschke",
        "title": "Chief Data Specialist",
        "address": {
            "street": "66515 Kaela Ridges",
            "city": "Lewborough",
            "state": "Colorado",
            "zip": "55913-8287",
            "country": "Maldives"
        },
        "avatar": "https://avatars.githubusercontent.com/u/75571582",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6cad3305-ca51-4132-8b05-c448c5e6f558",
        "name": "Roberta MacGyver DDS",
        "title": "Corporate Paradigm Manager",
        "address": {
            "street": "36663 Watsica Inlet",
            "city": "Sayreville",
            "state": "New Jersey",
            "zip": "58290-6071",
            "country": "Dominican Republic"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/161.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0008444e-c358-4482-8f4f-84c46e4f0388",
        "name": "Pat Moore",
        "title": "National Operations Associate",
        "address": {
            "street": "556 O'Conner Views",
            "city": "West Kayla",
            "state": "North Carolina",
            "zip": "35470-5578",
            "country": "Jamaica"
        },
        "avatar": "https://avatars.githubusercontent.com/u/81116648",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "65439047-059f-406e-a485-fe6187f39246",
        "name": "Gabriel Kessler",
        "title": "Legacy Operations Analyst",
        "address": {
            "street": "987 Verna View",
            "city": "Leannonfurt",
            "state": "Kansas",
            "zip": "34491-8206",
            "country": "Chile"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/948.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8130b3c5-b0d1-4460-937a-9a18d0f8f536",
        "name": "Preston Barrows",
        "title": "Investor Communications Consultant",
        "address": {
            "street": "3136 Mraz Way",
            "city": "McKinney",
            "state": "West Virginia",
            "zip": "11459",
            "country": "Finland"
        },
        "avatar": "https://avatars.githubusercontent.com/u/93495672",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4e96eac0-b8df-4138-b7a9-f93cfd538a76",
        "name": "Judith Gulgowski",
        "title": "International Division Coordinator",
        "address": {
            "street": "7400 Champlin Meadow",
            "city": "Orlando",
            "state": "South Carolina",
            "zip": "85364",
            "country": "Liberia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/95179090",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "496dcc34-1cb6-45dd-9db8-32ea5513c256",
        "name": "Harriet Quigley",
        "title": "Legacy Markets Architect",
        "address": {
            "street": "86075 Koch Parkways",
            "city": "D'Amoreworth",
            "state": "Wyoming",
            "zip": "77314-7077",
            "country": "Canada"
        },
        "avatar": "https://avatars.githubusercontent.com/u/1397776",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8038acc4-4c3a-4df8-9319-e7a75c471e6b",
        "name": "Kristine Williamson",
        "title": "National Communications Orchestrator",
        "address": {
            "street": "73243 Bradtke Junctions",
            "city": "West Nat",
            "state": "Oklahoma",
            "zip": "90705",
            "country": "Portugal"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1104.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5c2a27df-c17a-4ced-b039-f46797655e65",
        "name": "Martha Dare Jr.",
        "title": "Lead Infrastructure Facilitator",
        "address": {
            "street": "62388 Jaskolski Junctions",
            "city": "Kittyland",
            "state": "Nevada",
            "zip": "12887",
            "country": "Cote d'Ivoire"
        },
        "avatar": "https://avatars.githubusercontent.com/u/18537398",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f634fc0b-4a66-4160-a006-bf190aae55af",
        "name": "Jaime Ondricka",
        "title": "Customer Factors Assistant",
        "address": {
            "street": "807 Karlie Island",
            "city": "Fort Wiltonside",
            "state": "Connecticut",
            "zip": "90773-6092",
            "country": "Timor-Leste"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/74.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "44eced14-9223-4838-801e-2e9f4a34bc3b",
        "name": "Rita Hoppe",
        "title": "Internal Program Executive",
        "address": {
            "street": "8291 Zoey Meadow",
            "city": "West Imogene",
            "state": "Iowa",
            "zip": "70271-3666",
            "country": "United Arab Emirates"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/599.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "eb666512-5e3e-48ff-9792-cec6a52bc34c",
        "name": "Clarence Bins",
        "title": "Chief Implementation Planner",
        "address": {
            "street": "6268 Dach Spring",
            "city": "Fort Ahmadfield",
            "state": "New Mexico",
            "zip": "48306",
            "country": "Puerto Rico"
        },
        "avatar": "https://avatars.githubusercontent.com/u/75979763",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e533351a-38ee-4f5c-b0fa-6c43152cd44b",
        "name": "Frances Bartoletti",
        "title": "Direct Functionality Architect",
        "address": {
            "street": "224 Swaniawski Oval",
            "city": "South Noble",
            "state": "Alaska",
            "zip": "17209-6247",
            "country": "Botswana"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1082.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "76ace58f-9f83-4e7b-9f0a-c602a6207f9a",
        "name": "Billie Schaden",
        "title": "Forward Brand Liaison",
        "address": {
            "street": "991 Keyshawn Overpass",
            "city": "North Tyler",
            "state": "Illinois",
            "zip": "88737-7264",
            "country": "Lao People's Democratic Republic"
        },
        "avatar": "https://avatars.githubusercontent.com/u/7074779",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4d0e70ea-2027-4afb-ad1b-0f549b2abc6a",
        "name": "Rose Hauck",
        "title": "Customer Group Strategist",
        "address": {
            "street": "261 Schimmel Causeway",
            "city": "Hellerworth",
            "state": "New Hampshire",
            "zip": "40635",
            "country": "Aland Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/368.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0a70eb77-c670-4cac-8b9e-3c02f845720b",
        "name": "Mamie Klocko",
        "title": "Central Communications Agent",
        "address": {
            "street": "1070 Angie Flats",
            "city": "Petercester",
            "state": "Indiana",
            "zip": "47645-6600",
            "country": "Saint Helena"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1055.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2ecacf54-5117-44f1-b430-3d4f1d451b67",
        "name": "Roderick Walter",
        "title": "Central Division Architect",
        "address": {
            "street": "979 Bogisich Station",
            "city": "Huntington",
            "state": "Kentucky",
            "zip": "59748-9748",
            "country": "Philippines"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1053.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6d30a8a0-5417-4cbc-9863-6325cf0c1476",
        "name": "Dr. Michael Gerhold",
        "title": "Regional Paradigm Officer",
        "address": {
            "street": "35013 Weimann Fort",
            "city": "Hampton",
            "state": "Nebraska",
            "zip": "57850",
            "country": "Mauritania"
        },
        "avatar": "https://avatars.githubusercontent.com/u/34882374",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "dd0273c1-7755-463f-af1c-dd9b51d81217",
        "name": "Christie Conn",
        "title": "Legacy Communications Orchestrator",
        "address": {
            "street": "80962 Powlowski Junction",
            "city": "Boca Raton",
            "state": "Michigan",
            "zip": "57470-8713",
            "country": "Serbia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/70824083",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d8c65d73-b739-4702-8d05-05f625c8760b",
        "name": "Billie Purdy",
        "title": "Senior Markets Representative",
        "address": {
            "street": "741 Geraldine Ramp",
            "city": "Fort Rebecca",
            "state": "Maine",
            "zip": "55964-4481",
            "country": "Cuba"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/252.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "08524a4f-def9-4247-b5a8-f617fc1dcc9f",
        "name": "Stephanie Jenkins",
        "title": "Global Identity Architect",
        "address": {
            "street": "12913 Weimann Avenue",
            "city": "Houston",
            "state": "Louisiana",
            "zip": "78708",
            "country": "Belgium"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/248.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0b875c7d-6a3d-481a-bbd3-2a37c60babc3",
        "name": "Margie Skiles Sr.",
        "title": "Internal Intranet Designer",
        "address": {
            "street": "6044 Kozey Branch",
            "city": "Langton",
            "state": "North Dakota",
            "zip": "22989",
            "country": "Saint Vincent and the Grenadines"
        },
        "avatar": "https://avatars.githubusercontent.com/u/12564875",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8735eaab-93a4-4f8a-a8c3-ae17359dded9",
        "name": "Wilbur Fay",
        "title": "Senior Accountability Strategist",
        "address": {
            "street": "44025 Witting Corner",
            "city": "Boscocester",
            "state": "Wyoming",
            "zip": "74368",
            "country": "South Georgia and the South Sandwich Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/770.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a74d5a39-98c8-4ceb-9de5-6f44ffdb3020",
        "name": "Lena Osinski",
        "title": "Senior Factors Liaison",
        "address": {
            "street": "3377 Jadyn Garden",
            "city": "Lake Vincenzoberg",
            "state": "Pennsylvania",
            "zip": "95108-6616",
            "country": "Brunei Darussalam"
        },
        "avatar": "https://avatars.githubusercontent.com/u/76426973",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0635fd47-1fd2-49ac-b7e2-f195836bb2aa",
        "name": "Christina Wunsch",
        "title": "Future Operations Orchestrator",
        "address": {
            "street": "1756 Cedrick Islands",
            "city": "Rockville",
            "state": "Georgia",
            "zip": "08869",
            "country": "Niger"
        },
        "avatar": "https://avatars.githubusercontent.com/u/18598971",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "075e2085-5419-4cce-af6c-63771dd33012",
        "name": "Guy Wisoky",
        "title": "Corporate Directives Executive",
        "address": {
            "street": "48386 Deshawn Parkways",
            "city": "McCulloughshire",
            "state": "Illinois",
            "zip": "78454",
            "country": "Jersey"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/947.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "359e3f8d-965e-465a-9ba4-03d46df85fe8",
        "name": "Hilda Rath",
        "title": "Investor Tactics Engineer",
        "address": {
            "street": "7346 Nienow Cliff",
            "city": "North Chelsea",
            "state": "Illinois",
            "zip": "51366-9448",
            "country": "Trinidad and Tobago"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1018.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3c2af001-8670-42f2-9926-610d719a7cae",
        "name": "Miss Marion Glover",
        "title": "Customer Marketing Planner",
        "address": {
            "street": "814 Kirlin Orchard",
            "city": "South Herminio",
            "state": "Louisiana",
            "zip": "37683-6893",
            "country": "China"
        },
        "avatar": "https://avatars.githubusercontent.com/u/6311369",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f3ec56bf-1200-435a-877e-c253f1d0cfd2",
        "name": "Loretta Considine",
        "title": "Central Integration Producer",
        "address": {
            "street": "15587 O'Connell Keys",
            "city": "Lurlinetown",
            "state": "Illinois",
            "zip": "15597",
            "country": "Benin"
        },
        "avatar": "https://avatars.githubusercontent.com/u/77694256",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fedd2460-1b6e-4a9c-9175-0ae4d85c1422",
        "name": "Dana Wyman MD",
        "title": "District Usability Supervisor",
        "address": {
            "street": "30522 Lebsack Coves",
            "city": "Arvidstad",
            "state": "Alabama",
            "zip": "30106",
            "country": "Monaco"
        },
        "avatar": "https://avatars.githubusercontent.com/u/32984029",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4db17ac4-3fbb-4735-8ce4-536f213114ee",
        "name": "Whitney Klocko Sr.",
        "title": "Principal Communications Architect",
        "address": {
            "street": "386 Jerde View",
            "city": "North Allie",
            "state": "Maryland",
            "zip": "49635",
            "country": "Hong Kong"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/111.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1644c5ee-ce1e-418e-881b-908e22ff0633",
        "name": "Dianne Boehm",
        "title": "Forward Communications Officer",
        "address": {
            "street": "890 Jazlyn Squares",
            "city": "South Jayhaven",
            "state": "Hawaii",
            "zip": "14427-5096",
            "country": "Italy"
        },
        "avatar": "https://avatars.githubusercontent.com/u/78165665",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "36d32bae-da0e-47e8-aa44-f6d62c0dfdee",
        "name": "Juanita Wolf",
        "title": "Regional Markets Facilitator",
        "address": {
            "street": "3200 Klein Greens",
            "city": "Baltimore",
            "state": "New York",
            "zip": "38540",
            "country": "Brazil"
        },
        "avatar": "https://avatars.githubusercontent.com/u/91890190",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "cbb224b5-bb5e-4a70-b0ec-3c46d1f94619",
        "name": "Shelly Cremin",
        "title": "Regional Program Specialist",
        "address": {
            "street": "29276 Volkman Ford",
            "city": "North Annabellstead",
            "state": "Alabama",
            "zip": "01461-7097",
            "country": "Benin"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/408.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "278542de-fb43-40f3-b64d-053c0271f90d",
        "name": "Clayton Hansen",
        "title": "International Web Engineer",
        "address": {
            "street": "21564 Hamill Circle",
            "city": "Brettport",
            "state": "Missouri",
            "zip": "96603",
            "country": "Iceland"
        },
        "avatar": "https://avatars.githubusercontent.com/u/56026930",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c8407338-8326-4d7a-82eb-7b9f05900765",
        "name": "Vivian Schinner Jr.",
        "title": "Chief Brand Planner",
        "address": {
            "street": "799 Walton Grove",
            "city": "South Torrance",
            "state": "North Dakota",
            "zip": "30988",
            "country": "Paraguay"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/470.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a0f48979-8690-4fb5-acf5-1cdf4c3e3026",
        "name": "Kayla Witting",
        "title": "Direct Optimization Planner",
        "address": {
            "street": "624 Adams Ferry",
            "city": "Spinkaside",
            "state": "Georgia",
            "zip": "02347-8246",
            "country": "Costa Rica"
        },
        "avatar": "https://avatars.githubusercontent.com/u/72261089",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f604905c-b89c-4edc-8a37-541782846750",
        "name": "Gayle Morissette",
        "title": "Principal Web Administrator",
        "address": {
            "street": "9858 Gulgowski Spurs",
            "city": "Port Erynton",
            "state": "Mississippi",
            "zip": "98528-3947",
            "country": "Aland Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/71267505",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "bde3bbaf-2115-4162-9589-cde3bf63946f",
        "name": "Ellis Beahan-Jerde",
        "title": "Principal Integration Executive",
        "address": {
            "street": "80429 Kozey Spur",
            "city": "Port Santino",
            "state": "South Dakota",
            "zip": "90796",
            "country": "Guyana"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/727.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c1a81fad-3dc1-4fc0-b2c3-bc91e1674b89",
        "name": "Mr. Archie Ullrich II",
        "title": "Principal Research Engineer",
        "address": {
            "street": "647 Rosemary Fall",
            "city": "Julianabury",
            "state": "Oregon",
            "zip": "07302",
            "country": "Sierra Leone"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1066.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6d63e29c-f481-47f9-97ae-fcb4d06be49e",
        "name": "Stewart Metz",
        "title": "Lead Infrastructure Supervisor",
        "address": {
            "street": "787 Osinski Alley",
            "city": "Fort Natalie",
            "state": "Virginia",
            "zip": "48419-5572",
            "country": "Ethiopia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/14152315",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b71bc34d-f53f-4fb9-a5f6-1b54681b9277",
        "name": "Amber Hansen",
        "title": "Central Accountability Executive",
        "address": {
            "street": "538 Heller Villages",
            "city": "Port Erichberg",
            "state": "Wyoming",
            "zip": "16372-1940",
            "country": "Sri Lanka"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1209.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "aacabceb-b3d6-4da5-acb5-9642c1169a26",
        "name": "Penny Carter",
        "title": "Chief Branding Planner",
        "address": {
            "street": "493 Hoppe Junctions",
            "city": "Chandler",
            "state": "Wisconsin",
            "zip": "36626-1063",
            "country": "Malta"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/237.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8058a663-c3af-4ceb-803f-c02d998ffb92",
        "name": "Mr. Carroll Parisian",
        "title": "Customer Usability Associate",
        "address": {
            "street": "64114 Jovanny Key",
            "city": "Flatleyworth",
            "state": "Oregon",
            "zip": "43559",
            "country": "Svalbard & Jan Mayen Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/56855873",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "758b4d09-71a0-494e-8983-3015e4faf08b",
        "name": "Bob Considine",
        "title": "Legacy Quality Agent",
        "address": {
            "street": "329 Lubowitz Burgs",
            "city": "Concord",
            "state": "Delaware",
            "zip": "48606-2054",
            "country": "Bolivia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/7315304",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6ae78175-9e13-4af7-a7ca-7eaee2419945",
        "name": "Sammy Dicki",
        "title": "Direct Brand Analyst",
        "address": {
            "street": "695 Ashlee Hill",
            "city": "Olsonside",
            "state": "Alabama",
            "zip": "43176-3608",
            "country": "Marshall Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/80042233",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8af5125e-34a4-4081-ae40-8a5c36ef4fc9",
        "name": "Dr. Kerry Yundt",
        "title": "Direct Factors Analyst",
        "address": {
            "street": "798 Lebsack Land",
            "city": "Robelcester",
            "state": "Colorado",
            "zip": "51441-1165",
            "country": "Cote d'Ivoire"
        },
        "avatar": "https://avatars.githubusercontent.com/u/85990936",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "222ea993-bcae-43d1-a6e6-d794e0620fc0",
        "name": "Viola Stoltenberg",
        "title": "National Marketing Developer",
        "address": {
            "street": "2519 Cormier Crescent",
            "city": "Matildestead",
            "state": "South Carolina",
            "zip": "12348-1886",
            "country": "Republic of Korea"
        },
        "avatar": "https://avatars.githubusercontent.com/u/53971807",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "417511d8-9bcf-440b-bc0d-705951efc9a0",
        "name": "Bradford Fay DDS",
        "title": "Legacy Metrics Supervisor",
        "address": {
            "street": "7634 Haag Circles",
            "city": "East Deangelo",
            "state": "Arkansas",
            "zip": "63173",
            "country": "Djibouti"
        },
        "avatar": "https://avatars.githubusercontent.com/u/9022225",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a5ba3b6e-91cf-43b7-b445-2e788d2e720b",
        "name": "Luz Larson",
        "title": "Senior Intranet Architect",
        "address": {
            "street": "858 Webster Rue",
            "city": "Lake Altaboro",
            "state": "Virginia",
            "zip": "64212-0017",
            "country": "Palau"
        },
        "avatar": "https://avatars.githubusercontent.com/u/55011764",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "76f1efa5-dec5-4d8a-bcc8-98fea3d3ed26",
        "name": "Stella Torp",
        "title": "Future Communications Supervisor",
        "address": {
            "street": "518 Edwina Crossroad",
            "city": "Saraicester",
            "state": "Arkansas",
            "zip": "60874-9425",
            "country": "Russian Federation"
        },
        "avatar": "https://avatars.githubusercontent.com/u/9945329",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f689469a-3af8-4314-8779-0c9d4c9226ec",
        "name": "Dr. Ellis Dach",
        "title": "Central Usability Producer",
        "address": {
            "street": "19393 Daugherty Well",
            "city": "Wisozkborough",
            "state": "Tennessee",
            "zip": "82517-5449",
            "country": "Romania"
        },
        "avatar": "https://avatars.githubusercontent.com/u/88599101",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "099083ca-d7b1-445a-b174-cdf19b09b0ff",
        "name": "Alan Fahey",
        "title": "Future Optimization Executive",
        "address": {
            "street": "668 Tommie Meadows",
            "city": "Jackson",
            "state": "Maine",
            "zip": "90854",
            "country": "Macao"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/805.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d95f7f0d-5713-4db2-adf3-936b4f8ee144",
        "name": "Antonia Torphy",
        "title": "Lead Creative Designer",
        "address": {
            "street": "8172 Durgan Causeway",
            "city": "Longmont",
            "state": "New Jersey",
            "zip": "41451",
            "country": "Kenya"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/977.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a8105265-0e06-4fda-84d7-c45dda29173d",
        "name": "Austin Bernhard",
        "title": "International Research Producer",
        "address": {
            "street": "204 Williamson Light",
            "city": "Buckridgeworth",
            "state": "South Dakota",
            "zip": "31889-5989",
            "country": "Somalia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/293.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6bf510ec-263f-46d9-ace0-5189a94f65ff",
        "name": "Doyle VonRueden",
        "title": "Regional Security Technician",
        "address": {
            "street": "924 Effertz Junctions",
            "city": "Dallas",
            "state": "Kansas",
            "zip": "21450",
            "country": "South Africa"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/290.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3350357f-9ea1-47cb-a35e-e8b5b3b80646",
        "name": "Martha Sporer-Conn",
        "title": "Regional Group Architect",
        "address": {
            "street": "8861 Greenfelder Estate",
            "city": "Jakubowskifield",
            "state": "Kentucky",
            "zip": "62690",
            "country": "Togo"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/244.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "62f30e9f-1521-46ce-b8a6-c2798c709429",
        "name": "Juana O'Keefe",
        "title": "Direct Communications Facilitator",
        "address": {
            "street": "21275 Robel Dale",
            "city": "Dessiemouth",
            "state": "Kentucky",
            "zip": "82318-5375",
            "country": "Russian Federation"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/685.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b1abb0f2-8601-4ddc-9740-defb01730abf",
        "name": "Betsy Roberts",
        "title": "Customer Program Consultant",
        "address": {
            "street": "19737 Floy Brooks",
            "city": "North Titus",
            "state": "Alaska",
            "zip": "20055",
            "country": "Oman"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/724.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d250fa45-bf71-4922-88b4-281506545836",
        "name": "Evelyn Rau",
        "title": "Human Paradigm Engineer",
        "address": {
            "street": "75058 Ferne Plains",
            "city": "West Abbey",
            "state": "Vermont",
            "zip": "83627",
            "country": "South Sudan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/77067936",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c22ce92c-7558-4765-9ca2-e9b0858c9734",
        "name": "Vivian Davis",
        "title": "International Intranet Architect",
        "address": {
            "street": "6816 Franey Rapid",
            "city": "Floridaberg",
            "state": "Mississippi",
            "zip": "56037-0507",
            "country": "Antarctica"
        },
        "avatar": "https://avatars.githubusercontent.com/u/51414449",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b1cf3797-545d-494a-967c-db8163b7a180",
        "name": "Clifton Yundt",
        "title": "Internal Operations Associate",
        "address": {
            "street": "3742 Wuckert Forest",
            "city": "West Justusview",
            "state": "Missouri",
            "zip": "67560-3214",
            "country": "Chad"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/616.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6c818e14-2de3-4b31-938d-396f1c86ba41",
        "name": "Jessica Langworth",
        "title": "Senior Web Developer",
        "address": {
            "street": "97153 Rigoberto Causeway",
            "city": "Broken Arrow",
            "state": "Vermont",
            "zip": "78245-3028",
            "country": "Mozambique"
        },
        "avatar": "https://avatars.githubusercontent.com/u/50758705",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "dd970604-8633-4c36-976e-8ae529a9d5f7",
        "name": "Mercedes Nicolas",
        "title": "Senior Factors Planner",
        "address": {
            "street": "119 Mayer Walk",
            "city": "Fort Karolann",
            "state": "South Dakota",
            "zip": "70441-6465",
            "country": "Bermuda"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/229.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f56272fb-5956-4ece-b618-cfe4f04bfb07",
        "name": "Krista Rutherford",
        "title": "District Marketing Developer",
        "address": {
            "street": "9299 Elena Mountain",
            "city": "Naomiton",
            "state": "Maryland",
            "zip": "12293",
            "country": "Falkland Islands (Malvinas)"
        },
        "avatar": "https://avatars.githubusercontent.com/u/7601076",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d38b4891-2b2c-487f-ae7f-66ca5a568fcf",
        "name": "Lowell Muller",
        "title": "District Group Engineer",
        "address": {
            "street": "70894 Fredy Fords",
            "city": "North Emmanuelport",
            "state": "Montana",
            "zip": "80621",
            "country": "Western Sahara"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/916.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "660aac28-e681-49c1-97a5-be4f75a00a8f",
        "name": "Jenna Conn",
        "title": "Direct Identity Designer",
        "address": {
            "street": "85898 Alvera Points",
            "city": "South Eugeneborough",
            "state": "Maine",
            "zip": "63100",
            "country": "Burundi"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/743.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f7080d3f-21bc-4d62-8ea8-1f906bcff691",
        "name": "Alexis Bauch V",
        "title": "Forward Accountability Producer",
        "address": {
            "street": "847 Edgardo Grove",
            "city": "Port Amparo",
            "state": "North Carolina",
            "zip": "18342",
            "country": "Chad"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1215.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fd55c412-894a-4fb8-9396-db702b0256ba",
        "name": "Janis Predovic",
        "title": "Chief Infrastructure Planner",
        "address": {
            "street": "17310 Rosalinda Spurs",
            "city": "Wisokyville",
            "state": "New Mexico",
            "zip": "09926-3790",
            "country": "Mozambique"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/116.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "99960f65-9f35-4fab-88b1-b4e1fe0c18cb",
        "name": "Carolyn Hayes",
        "title": "Senior Tactics Technician",
        "address": {
            "street": "1822 Koch Junctions",
            "city": "Lake Dortha",
            "state": "Florida",
            "zip": "42471",
            "country": "Martinique"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/227.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a781218a-1290-4cad-af2d-f5f3e7ecd14d",
        "name": "Kristina Cruickshank",
        "title": "Legacy Division Agent",
        "address": {
            "street": "79557 Afton Ford",
            "city": "Fadelchester",
            "state": "Alabama",
            "zip": "25720",
            "country": "Chad"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/729.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "dd84b955-a809-4627-bc57-917364375044",
        "name": "Janis Hermann",
        "title": "Customer Creative Representative",
        "address": {
            "street": "699 Williamson Hills",
            "city": "Windlershire",
            "state": "Kentucky",
            "zip": "84677-1831",
            "country": "Hungary"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/699.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "eeeb70f0-cf44-407b-8f2f-23346ae65e87",
        "name": "Gerald Waters",
        "title": "Product Data Administrator",
        "address": {
            "street": "17764 Vandervort Estate",
            "city": "Uliceston",
            "state": "Alaska",
            "zip": "49850-8688",
            "country": "Mayotte"
        },
        "avatar": "https://avatars.githubusercontent.com/u/89791492",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8065746d-85c5-4547-9786-e15de5d0410e",
        "name": "Dr. Dennis Durgan",
        "title": "Principal Implementation Supervisor",
        "address": {
            "street": "60549 Kristin Orchard",
            "city": "Reichelton",
            "state": "Florida",
            "zip": "68792",
            "country": "Tonga"
        },
        "avatar": "https://avatars.githubusercontent.com/u/49935319",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "348bdab1-b433-4f13-b3f7-0b88ddcf598b",
        "name": "Mr. Cary Williamson",
        "title": "National Branding Representative",
        "address": {
            "street": "13847 Kathryn Crossing",
            "city": "Port Nestor",
            "state": "New York",
            "zip": "36723",
            "country": "Martinique"
        },
        "avatar": "https://avatars.githubusercontent.com/u/7696085",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3ce822f0-fa54-4689-95dc-61f2b5dcc61c",
        "name": "Antonio Denesik",
        "title": "Legacy Functionality Analyst",
        "address": {
            "street": "7140 Schmitt Curve",
            "city": "Cronincester",
            "state": "South Carolina",
            "zip": "15182",
            "country": "Iraq"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/557.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "251a70df-06ac-4cab-a4a6-82459f7ab053",
        "name": "Neil Rice DVM",
        "title": "Senior Functionality Officer",
        "address": {
            "street": "3219 Schuster Flat",
            "city": "South Derick",
            "state": "Texas",
            "zip": "08108",
            "country": "Guatemala"
        },
        "avatar": "https://avatars.githubusercontent.com/u/40689072",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "29742358-4e7a-4311-b86d-1212d9127948",
        "name": "Sherry Walsh",
        "title": "Senior Directives Representative",
        "address": {
            "street": "318 Darryl Park",
            "city": "Hettingerburgh",
            "state": "New Jersey",
            "zip": "34417-5671",
            "country": "Trinidad and Tobago"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1090.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a27503ae-22a8-418b-9c27-fd342edff20a",
        "name": "Meredith Dicki",
        "title": "Global Functionality Representative",
        "address": {
            "street": "9146 Keshawn Pines",
            "city": "West Brandynstad",
            "state": "Oklahoma",
            "zip": "78815",
            "country": "Namibia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/185.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e3447547-d18a-4ddc-a105-86c06998117d",
        "name": "Alexis Kub",
        "title": "Senior Integration Agent",
        "address": {
            "street": "3885 Ola Mews",
            "city": "Lake Madysonboro",
            "state": "Iowa",
            "zip": "61576-5344",
            "country": "Taiwan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/72922282",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c5acc0e9-d22e-48a7-9ab0-3ba4c9e22836",
        "name": "Sandra Schmidt",
        "title": "Lead Paradigm Supervisor",
        "address": {
            "street": "81096 Sporer Valley",
            "city": "Washington",
            "state": "Alaska",
            "zip": "15651",
            "country": "Colombia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/58061446",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4898f1df-b37e-4b2d-bad5-8f48a0fe73af",
        "name": "Jeremy Waters",
        "title": "Dynamic Assurance Liaison",
        "address": {
            "street": "47394 Hickle Passage",
            "city": "Indio",
            "state": "Nevada",
            "zip": "72636",
            "country": "Congo"
        },
        "avatar": "https://avatars.githubusercontent.com/u/86324578",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ef068fb7-1ce7-4756-bdaa-1a0d2116a75b",
        "name": "Dr. Jerald Witting",
        "title": "Chief Interactions Manager",
        "address": {
            "street": "36402 Matteo Fork",
            "city": "Surprise",
            "state": "California",
            "zip": "99334-2990",
            "country": "Djibouti"
        },
        "avatar": "https://avatars.githubusercontent.com/u/97080649",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1092824a-4ce1-44c7-a78d-d115bc781d6d",
        "name": "Francis Bernhard",
        "title": "District Usability Manager",
        "address": {
            "street": "957 Steuber Curve",
            "city": "Gastonia",
            "state": "Kentucky",
            "zip": "01587",
            "country": "Madagascar"
        },
        "avatar": "https://avatars.githubusercontent.com/u/8837832",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "85c77224-8ad5-4634-b293-487e23b05cc8",
        "name": "Brittany Hermiston",
        "title": "Chief Creative Consultant",
        "address": {
            "street": "8522 Okuneva Common",
            "city": "Bechtelarburgh",
            "state": "Tennessee",
            "zip": "39361-1645",
            "country": "French Polynesia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1060.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c5457eae-edd5-489e-9b32-0993410d36f6",
        "name": "Tony Stark",
        "title": "Principal Branding Facilitator",
        "address": {
            "street": "5400 Buckridge Mall",
            "city": "Altoona",
            "state": "Mississippi",
            "zip": "96985",
            "country": "Saint Vincent and the Grenadines"
        },
        "avatar": "https://avatars.githubusercontent.com/u/63196437",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "eedf87f4-c0d4-4e4d-a5a2-3a9d30898969",
        "name": "Heidi Cormier Sr.",
        "title": "Corporate Solutions Architect",
        "address": {
            "street": "693 Amaya Orchard",
            "city": "Braulioport",
            "state": "Montana",
            "zip": "61035",
            "country": "Estonia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/81888343",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ba365c0a-2106-4218-bd55-087eb4712d57",
        "name": "Ruth Wisoky",
        "title": "Dynamic Web Analyst",
        "address": {
            "street": "7286 Torp Trail",
            "city": "San Clemente",
            "state": "Tennessee",
            "zip": "17964",
            "country": "United States Minor Outlying Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/93986809",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e4085b55-0a00-4ebe-8b3b-e23c2a532231",
        "name": "Kenny Ratke",
        "title": "Human Functionality Architect",
        "address": {
            "street": "234 Beahan Rue",
            "city": "Port Noemyfield",
            "state": "Pennsylvania",
            "zip": "28352",
            "country": "Nigeria"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/22.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "903ed154-be2c-4cb0-b1db-418d25613b32",
        "name": "Sherri Rowe",
        "title": "Product Infrastructure Coordinator",
        "address": {
            "street": "5353 Adolf Glen",
            "city": "Lake Antwanfield",
            "state": "Nevada",
            "zip": "62216-1485",
            "country": "Niger"
        },
        "avatar": "https://avatars.githubusercontent.com/u/47855129",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9854eac7-9580-41d8-b4b0-a2455e58ab80",
        "name": "Georgia Gottlieb",
        "title": "Future Functionality Coordinator",
        "address": {
            "street": "6597 Kim Point",
            "city": "Walterstad",
            "state": "Mississippi",
            "zip": "55593-8258",
            "country": "Sint Maarten"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/544.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3385ce8b-19a4-4d77-bd15-20f14a1a17b6",
        "name": "Kelli Hackett",
        "title": "Investor Paradigm Technician",
        "address": {
            "street": "18163 Shana Plaza",
            "city": "Casperton",
            "state": "Massachusetts",
            "zip": "91278",
            "country": "United States Minor Outlying Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/478.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8fd179b7-7f5c-41f1-9807-47f2f57e66f6",
        "name": "Abraham Harvey",
        "title": "Chief Data Facilitator",
        "address": {
            "street": "41702 Van Harbor",
            "city": "Normal",
            "state": "West Virginia",
            "zip": "28659-3389",
            "country": "Greenland"
        },
        "avatar": "https://avatars.githubusercontent.com/u/21548100",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e077acaf-b3f2-4fcd-ae5d-d9b89f05ecb6",
        "name": "Darrel Dare",
        "title": "Legacy Metrics Developer",
        "address": {
            "street": "6737 Gulgowski Fall",
            "city": "New Joanneton",
            "state": "Montana",
            "zip": "18829-0304",
            "country": "Romania"
        },
        "avatar": "https://avatars.githubusercontent.com/u/22160338",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4d31ff6e-7dfc-41ef-9343-f01e3624eb1f",
        "name": "Orville Parisian",
        "title": "Customer Directives Executive",
        "address": {
            "street": "555 Jacklyn Islands",
            "city": "Lake Ubaldo",
            "state": "North Dakota",
            "zip": "22096",
            "country": "Andorra"
        },
        "avatar": "https://avatars.githubusercontent.com/u/86571319",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1cc99e00-79b1-49a7-94ec-540a172d1835",
        "name": "Stella Purdy-Leannon",
        "title": "Senior Security Representative",
        "address": {
            "street": "88548 Cassie Crest",
            "city": "Demetriston",
            "state": "Illinois",
            "zip": "05089-7125",
            "country": "Chile"
        },
        "avatar": "https://avatars.githubusercontent.com/u/93088302",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "73889b82-f124-42db-9ec4-ccfa167ed1b4",
        "name": "Clifton Quitzon",
        "title": "Dynamic Branding Specialist",
        "address": {
            "street": "8036 Serena Burgs",
            "city": "Lake Mabeltown",
            "state": "Oregon",
            "zip": "88634-4875",
            "country": "Honduras"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/135.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d4cc1a13-8273-4bae-988f-57523d905f1d",
        "name": "Jimmy Wiegand I",
        "title": "Central Solutions Consultant",
        "address": {
            "street": "75632 Keeling Crossing",
            "city": "Lake Britneyfield",
            "state": "Wyoming",
            "zip": "16339",
            "country": "Israel"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1161.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9b9405dc-da1d-4b1d-941b-f405c1948801",
        "name": "Kelley Klein PhD",
        "title": "Legacy Metrics Agent",
        "address": {
            "street": "85680 Shields Stravenue",
            "city": "Fort Laviniaworth",
            "state": "Georgia",
            "zip": "34373-8347",
            "country": "Tonga"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1168.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "05ba585c-5c80-4539-86ac-c2e40216a45f",
        "name": "Dr. Lola Gorczany",
        "title": "Lead Factors Designer",
        "address": {
            "street": "36946 Rosamond Ville",
            "city": "Corbincester",
            "state": "Montana",
            "zip": "07030-1683",
            "country": "Costa Rica"
        },
        "avatar": "https://avatars.githubusercontent.com/u/65764489",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "91d3853a-efe6-406e-b6df-7bf7b00c1650",
        "name": "Allison Mosciski",
        "title": "National Web Associate",
        "address": {
            "street": "8792 Susanna Motorway",
            "city": "Bernardoport",
            "state": "Arkansas",
            "zip": "56298-3529",
            "country": "Iceland"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/121.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d4abb505-d2c5-4d48-98d9-5d514805a0d4",
        "name": "Lynette Schultz",
        "title": "Internal Configuration Orchestrator",
        "address": {
            "street": "302 Dare Course",
            "city": "Halvorsonfort",
            "state": "New Hampshire",
            "zip": "77255-0526",
            "country": "Martinique"
        },
        "avatar": "https://avatars.githubusercontent.com/u/57750263",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ddb35e81-9d47-4f81-9914-58de79085952",
        "name": "Patti Marvin",
        "title": "Legacy Mobility Producer",
        "address": {
            "street": "84451 Mertz Roads",
            "city": "Kirlinfurt",
            "state": "Colorado",
            "zip": "72977-7324",
            "country": "Saint Lucia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/343.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b82cb9cc-b146-482c-b0bd-65a4b048739a",
        "name": "Allan Roob",
        "title": "Lead Marketing Executive",
        "address": {
            "street": "531 Emmerich Corners",
            "city": "Fort Federico",
            "state": "Colorado",
            "zip": "82960-1672",
            "country": "Aruba"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/898.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c7c0e7ad-4124-453c-9c16-fb53bef7ad59",
        "name": "Ada Stehr",
        "title": "Legacy Security Assistant",
        "address": {
            "street": "5228 Bradly Skyway",
            "city": "West Rowanborough",
            "state": "Illinois",
            "zip": "93738",
            "country": "Bangladesh"
        },
        "avatar": "https://avatars.githubusercontent.com/u/64920212",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8b6c48f9-0080-4a1f-9310-6b42a3893aea",
        "name": "Alexandra Mohr",
        "title": "Corporate Marketing Executive",
        "address": {
            "street": "82906 Willis Run",
            "city": "New Tracey",
            "state": "Alaska",
            "zip": "02648-2716",
            "country": "Antigua and Barbuda"
        },
        "avatar": "https://avatars.githubusercontent.com/u/9016252",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "94c3c89e-f82f-4a11-a47f-8685e306ccf8",
        "name": "Myrtle Weissnat",
        "title": "Product Research Manager",
        "address": {
            "street": "944 Sherman Loaf",
            "city": "Juvenalview",
            "state": "Tennessee",
            "zip": "68020",
            "country": "Honduras"
        },
        "avatar": "https://avatars.githubusercontent.com/u/95445002",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ebcf796b-b080-41ba-8f8a-85e6a3966e98",
        "name": "Julio Fadel",
        "title": "Future Program Facilitator",
        "address": {
            "street": "222 Jedediah Terrace",
            "city": "Apex",
            "state": "Nevada",
            "zip": "10091",
            "country": "Trinidad and Tobago"
        },
        "avatar": "https://avatars.githubusercontent.com/u/40370923",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "43fa45d9-4f6e-48eb-afa9-baf4fcaea459",
        "name": "Terry Zulauf",
        "title": "Legacy Factors Manager",
        "address": {
            "street": "71891 Dach Crest",
            "city": "North Eda",
            "state": "Wisconsin",
            "zip": "28040",
            "country": "Congo"
        },
        "avatar": "https://avatars.githubusercontent.com/u/98408973",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d2abe5c2-6ed8-45ef-9be7-7849ace80acd",
        "name": "Abel Franey I",
        "title": "Regional Division Facilitator",
        "address": {
            "street": "514 Hauck Village",
            "city": "East Clarefort",
            "state": "Pennsylvania",
            "zip": "51403-7075",
            "country": "Colombia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/70563284",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d53229b8-a83c-4000-a21c-cfff95e91662",
        "name": "Maxine Kling",
        "title": "Chief Tactics Supervisor",
        "address": {
            "street": "926 Hand Flat",
            "city": "Lowell",
            "state": "Indiana",
            "zip": "47228-6164",
            "country": "Australia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1092.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0815b4e8-5072-4462-82cc-9bba61e2725e",
        "name": "Audrey Wehner",
        "title": "Regional Operations Director",
        "address": {
            "street": "86940 Tremblay Manor",
            "city": "Schultzhaven",
            "state": "Vermont",
            "zip": "89321-7699",
            "country": "North Macedonia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "81640cad-82b4-4dbf-88a3-caa026bc5dd2",
        "name": "Janis Fritsch",
        "title": "Human Assurance Representative",
        "address": {
            "street": "86787 Quitzon Ford",
            "city": "West Ansleyshire",
            "state": "Massachusetts",
            "zip": "73333-3947",
            "country": "Singapore"
        },
        "avatar": "https://avatars.githubusercontent.com/u/28251989",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d6e16fe2-3362-4bff-9962-28e992b0a676",
        "name": "Rafael Larson",
        "title": "Product Paradigm Representative",
        "address": {
            "street": "834 Cindy Drive",
            "city": "Beauton",
            "state": "Missouri",
            "zip": "22664",
            "country": "Malawi"
        },
        "avatar": "https://avatars.githubusercontent.com/u/37813717",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "18f8a4d1-05f4-4e5f-9a47-a77cd155bbfb",
        "name": "Aubrey Orn",
        "title": "Lead Accounts Associate",
        "address": {
            "street": "1905 Daniel Way",
            "city": "Fort Sunnyburgh",
            "state": "South Carolina",
            "zip": "54146-5397",
            "country": "Latvia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/694.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2fdfd8b3-04d2-45bd-b962-2243248b5125",
        "name": "Horace Lubowitz",
        "title": "Customer Metrics Technician",
        "address": {
            "street": "503 Morar Parkway",
            "city": "Lake Queen",
            "state": "Tennessee",
            "zip": "87350-8475",
            "country": "Haiti"
        },
        "avatar": "https://avatars.githubusercontent.com/u/41243346",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b303d0b1-02c3-4188-bb2a-a1121369201f",
        "name": "Mr. Jorge Cormier I",
        "title": "International Factors Agent",
        "address": {
            "street": "576 Annabelle Estates",
            "city": "East Mafalda",
            "state": "Iowa",
            "zip": "52295",
            "country": "Vietnam"
        },
        "avatar": "https://avatars.githubusercontent.com/u/81972807",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d8b86d75-1650-4232-92e0-928d45fa94c2",
        "name": "Raymond Schmeler",
        "title": "Forward Markets Coordinator",
        "address": {
            "street": "2184 Myles Loop",
            "city": "South Orastead",
            "state": "Michigan",
            "zip": "15527",
            "country": "United Kingdom"
        },
        "avatar": "https://avatars.githubusercontent.com/u/7385193",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5c43aa46-aee8-462b-a307-9db1231374c6",
        "name": "Jesse Nienow",
        "title": "International Functionality Producer",
        "address": {
            "street": "158 Monahan Radial",
            "city": "Trantowburgh",
            "state": "Montana",
            "zip": "45016",
            "country": "Cyprus"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/943.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6efe0a3c-1154-4d4a-b9f1-8ad0b3a20ef2",
        "name": "Dr. Alfred Wolff",
        "title": "Dynamic Accounts Consultant",
        "address": {
            "street": "5697 Delmer Brook",
            "city": "Port Modesta",
            "state": "Louisiana",
            "zip": "03992",
            "country": "Croatia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1243.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "79dcfe48-8ee0-48ae-996d-40a9c8be9076",
        "name": "Phillip Walker",
        "title": "Human Identity Orchestrator",
        "address": {
            "street": "962 Purdy Crescent",
            "city": "Josephinecester",
            "state": "Hawaii",
            "zip": "58984",
            "country": "Spain"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1069.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1ea77e0f-eb15-467e-be70-cee86f07b186",
        "name": "Dewey Barrows Jr.",
        "title": "Human Program Planner",
        "address": {
            "street": "3813 Kulas Glens",
            "city": "Blazeboro",
            "state": "Utah",
            "zip": "64304-7325",
            "country": "Guatemala"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/177.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "31ae2796-da30-4be9-b72e-b3110e3e7b8e",
        "name": "Marianne Pagac",
        "title": "Customer Factors Facilitator",
        "address": {
            "street": "77725 Botsford Expressway",
            "city": "Pfannerstillberg",
            "state": "Michigan",
            "zip": "08398-2940",
            "country": "Falkland Islands (Malvinas)"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1244.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "95258bce-a234-476f-ba1d-d512ab09d6a3",
        "name": "Ellen Pouros IV",
        "title": "Legacy Tactics Executive",
        "address": {
            "street": "7040 Will Ford",
            "city": "Kuvalisberg",
            "state": "Kentucky",
            "zip": "07798-9243",
            "country": "Mauritius"
        },
        "avatar": "https://avatars.githubusercontent.com/u/92527559",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a8c26348-aca5-4d09-9d90-52ed36e82796",
        "name": "Amos Walker",
        "title": "Principal Configuration Specialist",
        "address": {
            "street": "9222 Rasheed Shores",
            "city": "East Raleigh",
            "state": "Illinois",
            "zip": "65025-4793",
            "country": "United States Minor Outlying Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/199.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b9cd5afb-94d9-43d8-9a1c-7c21c3433ae1",
        "name": "Lucy Blick",
        "title": "Corporate Tactics Liaison",
        "address": {
            "street": "6942 Coleman Port",
            "city": "Rock Hill",
            "state": "Tennessee",
            "zip": "68017",
            "country": "United States of America"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/333.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6b44f894-54be-435c-933d-e4bc016f3053",
        "name": "Mattie Batz",
        "title": "District Response Orchestrator",
        "address": {
            "street": "5765 Alphonso Valley",
            "city": "North Gillian",
            "state": "North Dakota",
            "zip": "52505-6568",
            "country": "Anguilla"
        },
        "avatar": "https://avatars.githubusercontent.com/u/55783557",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4b1a880d-fe3a-4ac8-8e40-b6091f9c3fee",
        "name": "Kristie Olson",
        "title": "Internal Interactions Strategist",
        "address": {
            "street": "85021 Abshire Centers",
            "city": "Lake Maiaworth",
            "state": "Washington",
            "zip": "13735",
            "country": "Qatar"
        },
        "avatar": "https://avatars.githubusercontent.com/u/78134679",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c043da6b-93b8-4329-b17b-36d7fe2ec525",
        "name": "Herbert O'Conner PhD",
        "title": "Investor Research Analyst",
        "address": {
            "street": "37045 Rosenbaum Mount",
            "city": "New Laurenchester",
            "state": "Vermont",
            "zip": "37646-4039",
            "country": "Sweden"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/125.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6db5b58d-fc32-4ea1-ad90-c186530b6c4e",
        "name": "Leigh Schmitt",
        "title": "Senior Solutions Analyst",
        "address": {
            "street": "81631 Caleb Valley",
            "city": "East Horaceboro",
            "state": "Texas",
            "zip": "21103-0731",
            "country": "Georgia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7ddea08f-dd97-4b6e-b69c-3acfc558090a",
        "name": "Cassandra Grady",
        "title": "Customer Tactics Supervisor",
        "address": {
            "street": "74516 Eula Underpass",
            "city": "Buena Park",
            "state": "Idaho",
            "zip": "84342",
            "country": "Brazil"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/563.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "bd3c1084-05de-412b-b803-1e996dc9f773",
        "name": "Patty Ritchie",
        "title": "Internal Integration Specialist",
        "address": {
            "street": "732 Bosco Viaduct",
            "city": "Muhammadport",
            "state": "Wyoming",
            "zip": "10814",
            "country": "North Macedonia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1245.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "13a7ce5d-ee47-488d-a3eb-664c124d5ece",
        "name": "Jacquelyn Waters",
        "title": "Lead Program Designer",
        "address": {
            "street": "674 Esther Land",
            "city": "South Stanton",
            "state": "Wisconsin",
            "zip": "67521-1636",
            "country": "Montserrat"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/529.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f9e47cd3-70d0-4424-92cc-ee44addd9f98",
        "name": "Stewart Kihn I",
        "title": "Future Mobility Coordinator",
        "address": {
            "street": "7350 Noble Green",
            "city": "Las Vegas",
            "state": "Florida",
            "zip": "41232",
            "country": "Barbados"
        },
        "avatar": "https://avatars.githubusercontent.com/u/45207703",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6241e6f8-c3fd-427f-9f79-d8ba023ad41a",
        "name": "Flora Beatty",
        "title": "Customer Communications Liaison",
        "address": {
            "street": "10203 Koss Meadows",
            "city": "Port Connormouth",
            "state": "Colorado",
            "zip": "54917",
            "country": "Peru"
        },
        "avatar": "https://avatars.githubusercontent.com/u/88548883",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "cbceffac-92e3-4e01-92c6-ad04f26d803f",
        "name": "Katrina Runolfsdottir",
        "title": "National Metrics Manager",
        "address": {
            "street": "59066 Kuhlman Stravenue",
            "city": "Haleyburgh",
            "state": "West Virginia",
            "zip": "15713",
            "country": "Bulgaria"
        },
        "avatar": "https://avatars.githubusercontent.com/u/55784780",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0f722fd5-eefe-4f21-834b-b67ad6cc808b",
        "name": "Desiree Hills",
        "title": "Internal Functionality Analyst",
        "address": {
            "street": "1041 Trycia Green",
            "city": "Ayanafurt",
            "state": "Idaho",
            "zip": "57813-1560",
            "country": "Congo"
        },
        "avatar": "https://avatars.githubusercontent.com/u/34420591",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a008d360-f68d-42ce-81ea-496644ae9894",
        "name": "Ramiro Mueller Jr.",
        "title": "Chief Infrastructure Producer",
        "address": {
            "street": "779 Becker Underpass",
            "city": "Gilroy",
            "state": "Texas",
            "zip": "31508-8908",
            "country": "Falkland Islands (Malvinas)"
        },
        "avatar": "https://avatars.githubusercontent.com/u/90417061",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a2dce3dc-902b-4bc5-8ba3-ae0c10b81b5a",
        "name": "Mr. Jamie Nolan",
        "title": "Global Infrastructure Technician",
        "address": {
            "street": "75766 Ziemann Lakes",
            "city": "Kristyboro",
            "state": "Kentucky",
            "zip": "73012-0133",
            "country": "Rwanda"
        },
        "avatar": "https://avatars.githubusercontent.com/u/88097112",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1997f739-180e-4dd3-97c1-7517a6de7c54",
        "name": "Meredith Moen",
        "title": "District Research Technician",
        "address": {
            "street": "284 O'Kon Parkways",
            "city": "Melyssafield",
            "state": "Utah",
            "zip": "35252",
            "country": "Sierra Leone"
        },
        "avatar": "https://avatars.githubusercontent.com/u/95938055",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e2c4f7d7-1343-4dab-8992-b95063a6c65d",
        "name": "Gayle West",
        "title": "Legacy Accounts Liaison",
        "address": {
            "street": "132 Melba Circles",
            "city": "Lake Aydenchester",
            "state": "Colorado",
            "zip": "06919",
            "country": "Vietnam"
        },
        "avatar": "https://avatars.githubusercontent.com/u/97968809",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6a9c81e7-ac3a-4a1b-81a8-5d6fb1d82b04",
        "name": "Melba Hirthe",
        "title": "Chief Research Agent",
        "address": {
            "street": "9246 Gage Port",
            "city": "Anyatown",
            "state": "Kansas",
            "zip": "93227",
            "country": "New Zealand"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/852.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9c2b9592-5a61-49e7-89aa-7e2814aba1e6",
        "name": "Diane Hermiston",
        "title": "Regional Quality Orchestrator",
        "address": {
            "street": "542 Rasheed Glen",
            "city": "Morissetteview",
            "state": "Ohio",
            "zip": "23755",
            "country": "Russian Federation"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/30.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4304b307-9ab5-4828-8863-c41f3cbf2d40",
        "name": "Kyle Ruecker",
        "title": "Customer Group Facilitator",
        "address": {
            "street": "10688 Viviane Place",
            "city": "West Rita",
            "state": "North Dakota",
            "zip": "85382",
            "country": "Reunion"
        },
        "avatar": "https://avatars.githubusercontent.com/u/54447931",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a043096a-0283-4b68-bf11-eded72c13334",
        "name": "Erin Denesik",
        "title": "Regional Implementation Producer",
        "address": {
            "street": "5128 Percy Spurs",
            "city": "North Juvenal",
            "state": "Connecticut",
            "zip": "81877",
            "country": "Andorra"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1020.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "20ff3236-be94-42a5-998a-bede171ca5fa",
        "name": "Mr. Tom Kovacek",
        "title": "Dynamic Optimization Analyst",
        "address": {
            "street": "31851 Amina View",
            "city": "Pensacola",
            "state": "Nevada",
            "zip": "94099",
            "country": "Seychelles"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/770.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e7df9f44-007f-4366-95b2-b943a6f06f73",
        "name": "Kay Considine",
        "title": "Direct Accountability Supervisor",
        "address": {
            "street": "146 Brendan Burg",
            "city": "Hudsonfurt",
            "state": "Iowa",
            "zip": "35229-0791",
            "country": "Oman"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1106.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b408add6-d35b-466f-a56f-3dca1f55384e",
        "name": "Joshua Mayert",
        "title": "Central Marketing Administrator",
        "address": {
            "street": "216 Heller Avenue",
            "city": "Tremblayfurt",
            "state": "North Carolina",
            "zip": "80381-4620",
            "country": "Cyprus"
        },
        "avatar": "https://avatars.githubusercontent.com/u/90722960",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "dcf600cc-1f1f-4d2b-a507-a6446c630727",
        "name": "Tom Reichert Sr.",
        "title": "Corporate Directives Supervisor",
        "address": {
            "street": "70279 Emelie Lake",
            "city": "Littleton",
            "state": "Minnesota",
            "zip": "17611-5962",
            "country": "France"
        },
        "avatar": "https://avatars.githubusercontent.com/u/94457146",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2f625a1f-f3e4-4646-bb77-0c05f8a95da1",
        "name": "Cora Stark II",
        "title": "Dynamic Paradigm Architect",
        "address": {
            "street": "8487 Pearl Light",
            "city": "Kamillebury",
            "state": "Kansas",
            "zip": "54463",
            "country": "Chad"
        },
        "avatar": "https://avatars.githubusercontent.com/u/71634658",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8df02e94-10be-433f-83ac-0f140214830c",
        "name": "Steve Klocko",
        "title": "Human Program Director",
        "address": {
            "street": "37867 Isai Vista",
            "city": "Port Emil",
            "state": "Rhode Island",
            "zip": "51003",
            "country": "Senegal"
        },
        "avatar": "https://avatars.githubusercontent.com/u/22284137",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "61bb32cd-03c2-426c-b417-16231614ea97",
        "name": "Dr. Edwin Hayes-Volkman",
        "title": "Chief Interactions Assistant",
        "address": {
            "street": "402 Heathcote Summit",
            "city": "West Philip",
            "state": "Connecticut",
            "zip": "02088",
            "country": "British Indian Ocean Territory (Chagos Archipelago)"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/242.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e76d00fd-2670-4627-a7d5-820401ac4174",
        "name": "Kenny Hermann",
        "title": "Chief Tactics Agent",
        "address": {
            "street": "551 Brakus Harbor",
            "city": "Kutchville",
            "state": "Virginia",
            "zip": "82007-8505",
            "country": "Iraq"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/937.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "181c7889-d976-4d3d-bca9-de619a576773",
        "name": "Ernesto Kautzer",
        "title": "Regional Communications Strategist",
        "address": {
            "street": "9561 Denesik Trail",
            "city": "Binghamton",
            "state": "Montana",
            "zip": "07374",
            "country": "Norfolk Island"
        },
        "avatar": "https://avatars.githubusercontent.com/u/25203384",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e20f78a7-4f0a-4475-87ae-a7610e1a7bb2",
        "name": "Camille Rutherford",
        "title": "Chief Mobility Administrator",
        "address": {
            "street": "53135 Kevon Extension",
            "city": "Greenfelderhaven",
            "state": "West Virginia",
            "zip": "63438",
            "country": "Australia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/46484111",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0103fb1d-313e-40de-b742-bc7bbce51ad4",
        "name": "Kim Schimmel Jr.",
        "title": "Legacy Applications Designer",
        "address": {
            "street": "8171 Deckow Valleys",
            "city": "Pearland",
            "state": "Alaska",
            "zip": "55043",
            "country": "Democratic People's Republic of Korea"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/325.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f57bd89d-934e-4999-8d1b-92e6bae3a4f0",
        "name": "Carlton Zieme",
        "title": "Customer Data Administrator",
        "address": {
            "street": "28613 Carlo Dam",
            "city": "East Ellis",
            "state": "Connecticut",
            "zip": "65010-9678",
            "country": "Curacao"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/473.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "21947f00-2226-4307-9438-b5882600ba29",
        "name": "Kristie Wilderman",
        "title": "Product Accounts Analyst",
        "address": {
            "street": "45406 Florida Viaduct",
            "city": "Tillmanmouth",
            "state": "Delaware",
            "zip": "40751",
            "country": "Central African Republic"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1107.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "732dd229-8689-4730-99d0-cacd7b0a1c47",
        "name": "Mr. Dominick Bechtelar",
        "title": "Central Markets Engineer",
        "address": {
            "street": "40426 Meagan Plaza",
            "city": "New Karelleberg",
            "state": "Illinois",
            "zip": "14549",
            "country": "Brazil"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/803.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "48a93272-45ad-46d9-b1ec-bd3bdf51c482",
        "name": "Robyn O'Kon",
        "title": "Regional Intranet Administrator",
        "address": {
            "street": "4923 Matt Drives",
            "city": "Port Brittany",
            "state": "Maine",
            "zip": "22680-7914",
            "country": "Chad"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/142.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "bde1d539-de11-4603-b903-bac0725d52bb",
        "name": "Kayla Macejkovic",
        "title": "National Web Officer",
        "address": {
            "street": "23614 Moen Mount",
            "city": "Fort Drakebury",
            "state": "Illinois",
            "zip": "13782",
            "country": "Falkland Islands (Malvinas)"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/688.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "269238eb-739a-4de8-bb50-9c37c080fe17",
        "name": "Dr. Marcus Abernathy",
        "title": "District Web Planner",
        "address": {
            "street": "5185 Maida Pass",
            "city": "Lamontchester",
            "state": "Kansas",
            "zip": "65099",
            "country": "Nauru"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/61.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ceb88952-263a-4739-afba-69463a2cea5e",
        "name": "Gina Wyman",
        "title": "Investor Paradigm Analyst",
        "address": {
            "street": "8636 Justyn Curve",
            "city": "Lake Arnulfoport",
            "state": "Maryland",
            "zip": "78546",
            "country": "Qatar"
        },
        "avatar": "https://avatars.githubusercontent.com/u/7638122",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5ce0640d-7096-4088-923f-c3e9762906bc",
        "name": "Estelle Willms",
        "title": "Dynamic Operations Supervisor",
        "address": {
            "street": "801 Kulas Manors",
            "city": "Leannonburgh",
            "state": "Connecticut",
            "zip": "74453-5809",
            "country": "Saint Pierre and Miquelon"
        },
        "avatar": "https://avatars.githubusercontent.com/u/73422048",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b3f129f5-b8bf-4696-bf2a-630455604f04",
        "name": "Angel Grady",
        "title": "Customer Accountability Liaison",
        "address": {
            "street": "7127 Cruickshank Mews",
            "city": "Harleyport",
            "state": "Minnesota",
            "zip": "31670",
            "country": "Italy"
        },
        "avatar": "https://avatars.githubusercontent.com/u/54680018",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "edca8338-0d6e-40cc-a2ee-7271d35c3e49",
        "name": "Dr. Esther Lehner",
        "title": "District Mobility Strategist",
        "address": {
            "street": "3047 Schoen Bypass",
            "city": "South Ottilie",
            "state": "California",
            "zip": "39468",
            "country": "Eritrea"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/981.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5dbadd6c-b5fe-4e68-9076-226ce23d4ca4",
        "name": "Henry Aufderhar",
        "title": "Senior Brand Associate",
        "address": {
            "street": "93450 Sibyl Freeway",
            "city": "Lake Holly",
            "state": "Washington",
            "zip": "86126",
            "country": "Lebanon"
        },
        "avatar": "https://avatars.githubusercontent.com/u/60537244",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e758db84-5981-4eed-85a5-1791610fc113",
        "name": "Tanya Douglas",
        "title": "Direct Assurance Agent",
        "address": {
            "street": "5339 Daphne Canyon",
            "city": "Merlfurt",
            "state": "Vermont",
            "zip": "82575-1560",
            "country": "Kuwait"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1219.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0e910ca2-719a-40b1-b0f7-61d578c9c0a5",
        "name": "Tommie Murray",
        "title": "Internal Response Planner",
        "address": {
            "street": "796 Fisher Mews",
            "city": "Lynwood",
            "state": "Wisconsin",
            "zip": "90401-4221",
            "country": "Anguilla"
        },
        "avatar": "https://avatars.githubusercontent.com/u/6191927",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8432e264-d679-4342-b43e-f7eb7b782333",
        "name": "Van Willms I",
        "title": "Chief Division Coordinator",
        "address": {
            "street": "7591 Layla Circle",
            "city": "Fort Maximeview",
            "state": "Kentucky",
            "zip": "50754-9030",
            "country": "Greenland"
        },
        "avatar": "https://avatars.githubusercontent.com/u/64581458",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "01a2dac5-83df-4928-91e0-af10f84fbaac",
        "name": "Melody Friesen",
        "title": "International Security Specialist",
        "address": {
            "street": "17145 Cole Pine",
            "city": "Fort Chanelle",
            "state": "New Mexico",
            "zip": "92821",
            "country": "Zambia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/88278816",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "90bcb484-79fb-411d-aa55-fba7faaa07c1",
        "name": "Erika Jakubowski",
        "title": "Direct Integration Executive",
        "address": {
            "street": "39533 Cesar Fall",
            "city": "East Markusmouth",
            "state": "Iowa",
            "zip": "70493",
            "country": "Guatemala"
        },
        "avatar": "https://avatars.githubusercontent.com/u/18521782",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7525f689-0285-4e15-8472-37bd1ceb0c90",
        "name": "Louis Johnston",
        "title": "Internal Response Supervisor",
        "address": {
            "street": "286 Skiles Cove",
            "city": "Lehi",
            "state": "California",
            "zip": "40128",
            "country": "Bahamas"
        },
        "avatar": "https://avatars.githubusercontent.com/u/38037741",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f98a50e7-fc5d-48ed-8291-d1c749db7c1a",
        "name": "Madeline Considine",
        "title": "Chief Accounts Facilitator",
        "address": {
            "street": "6854 Macie Falls",
            "city": "Pourosshire",
            "state": "New Hampshire",
            "zip": "51172",
            "country": "Sri Lanka"
        },
        "avatar": "https://avatars.githubusercontent.com/u/70235618",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "51107987-afc9-470d-8f9a-817e3d071aff",
        "name": "Ms. Brittany Tillman-Bednar",
        "title": "Central Accounts Analyst",
        "address": {
            "street": "730 Maximilian Valleys",
            "city": "Uptonview",
            "state": "Arizona",
            "zip": "43715",
            "country": "Palau"
        },
        "avatar": "https://avatars.githubusercontent.com/u/88007698",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4acae476-d4e4-4689-8dcf-8da04691b224",
        "name": "Randall Carter",
        "title": "International Configuration Orchestrator",
        "address": {
            "street": "2226 Feil Mews",
            "city": "Peoria",
            "state": "Virginia",
            "zip": "29448",
            "country": "Ghana"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/488.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ae64c56f-c2ed-48da-9d02-badd24b3bd11",
        "name": "Clark West",
        "title": "Customer Web Coordinator",
        "address": {
            "street": "6687 Kunde Run",
            "city": "Creminchester",
            "state": "Colorado",
            "zip": "31212",
            "country": "Djibouti"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/290.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4eeedb1e-8c1f-483d-8ef6-e89f8c2cfd80",
        "name": "Jan Hilpert",
        "title": "District Division Producer",
        "address": {
            "street": "920 O'Reilly Dam",
            "city": "Lubowitzside",
            "state": "Oklahoma",
            "zip": "73532-2675",
            "country": "Algeria"
        },
        "avatar": "https://avatars.githubusercontent.com/u/14417524",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fc1576bb-cf7c-40ba-b9ea-9cde82a170d3",
        "name": "Nichole Kessler",
        "title": "Internal Program Facilitator",
        "address": {
            "street": "2929 Hintz Greens",
            "city": "West Ryderville",
            "state": "Alabama",
            "zip": "31742-6261",
            "country": "Bhutan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/22300097",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "77028b5f-68de-489c-ad12-d7dee675691b",
        "name": "Leon Toy DVM",
        "title": "Customer Intranet Engineer",
        "address": {
            "street": "406 Henry Canyon",
            "city": "Lehigh Acres",
            "state": "Kansas",
            "zip": "82571-1916",
            "country": "Guernsey"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/179.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e3ce181d-b0cb-4f02-9775-6efe8e09ee28",
        "name": "Joe Jacobson",
        "title": "Chief Division Analyst",
        "address": {
            "street": "86876 DuBuque Inlet",
            "city": "Pacochaburgh",
            "state": "Rhode Island",
            "zip": "60481",
            "country": "American Samoa"
        },
        "avatar": "https://avatars.githubusercontent.com/u/17905625",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8d84c939-8136-41f7-b65e-7738db6d2e7d",
        "name": "Mr. Leon Nitzsche",
        "title": "Forward Usability Technician",
        "address": {
            "street": "3402 Johnson Estate",
            "city": "Angieberg",
            "state": "Vermont",
            "zip": "11737-1987",
            "country": "Slovenia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/2445372",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b19ae524-280b-4f28-ab92-1067cdc58e4b",
        "name": "Darrell Abernathy",
        "title": "Global Metrics Administrator",
        "address": {
            "street": "34584 Oran Fall",
            "city": "Port Jaycee",
            "state": "Wisconsin",
            "zip": "98119",
            "country": "Tuvalu"
        },
        "avatar": "https://avatars.githubusercontent.com/u/55718647",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "aad9d882-d3a0-4cfe-ac3a-4c83bcf7b536",
        "name": "Denise Schowalter",
        "title": "Direct Tactics Technician",
        "address": {
            "street": "34798 Jocelyn Ford",
            "city": "Fort Smith",
            "state": "Pennsylvania",
            "zip": "06686-7222",
            "country": "United Kingdom"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/940.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "bb8aecdf-682a-41d4-a641-e8a1b710290e",
        "name": "Carroll Greenfelder II",
        "title": "Central Program Facilitator",
        "address": {
            "street": "169 Demario Well",
            "city": "Fort Vernonfurt",
            "state": "Mississippi",
            "zip": "01579",
            "country": "Tunisia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/404.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6fabfe03-872f-4426-81f0-2ac76f40d08f",
        "name": "Lamar Torphy",
        "title": "Dynamic Paradigm Associate",
        "address": {
            "street": "64028 Wiza Spurs",
            "city": "Lansing",
            "state": "Idaho",
            "zip": "72465-7392",
            "country": "Wallis and Futuna"
        },
        "avatar": "https://avatars.githubusercontent.com/u/20236500",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1abef0e5-6064-45ea-ba3a-ae51983a766a",
        "name": "Marcos Fadel",
        "title": "Legacy Quality Technician",
        "address": {
            "street": "90796 Parker Port",
            "city": "Port Anyaborough",
            "state": "New Hampshire",
            "zip": "87950-2446",
            "country": "Lao People's Democratic Republic"
        },
        "avatar": "https://avatars.githubusercontent.com/u/76630573",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c4b5b0de-4c34-481b-8df9-647861c56bdd",
        "name": "Nadine Anderson",
        "title": "Human Integration Executive",
        "address": {
            "street": "3148 Dolly Neck",
            "city": "New Holly",
            "state": "Iowa",
            "zip": "99162-9415",
            "country": "Turkmenistan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/950.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "30ff68c4-be15-4dd4-804c-6ae49ed8d6cf",
        "name": "Virginia Berge",
        "title": "Internal Usability Producer",
        "address": {
            "street": "3015 Schneider Harbors",
            "city": "West Brianshire",
            "state": "Utah",
            "zip": "24390-5654",
            "country": "Bouvet Island"
        },
        "avatar": "https://avatars.githubusercontent.com/u/16490432",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "43a40d11-5811-4048-80d2-aee2011c6246",
        "name": "Brett Welch",
        "title": "Corporate Data Associate",
        "address": {
            "street": "8482 Margret Meadows",
            "city": "Jaskolskiland",
            "state": "North Dakota",
            "zip": "22175",
            "country": "Luxembourg"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/825.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a0b32bd0-1b30-4fe9-8b31-d8f51b96d2c5",
        "name": "Claude Barrows",
        "title": "Chief Mobility Associate",
        "address": {
            "street": "1041 Rosina Extension",
            "city": "New Ramiro",
            "state": "Rhode Island",
            "zip": "10508-2599",
            "country": "Norfolk Island"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/585.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2d173eda-24ef-4788-a849-b60678058024",
        "name": "Jana Kunde III",
        "title": "National Integration Supervisor",
        "address": {
            "street": "17756 Zola Points",
            "city": "Murphyshire",
            "state": "Missouri",
            "zip": "80920-9011",
            "country": "Northern Mariana Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/38887011",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0b0e1cfb-42af-4323-a488-7c05cf3cc88d",
        "name": "Phillip Klein",
        "title": "Senior Tactics Architect",
        "address": {
            "street": "826 O'Reilly Ports",
            "city": "Sofiafield",
            "state": "Wyoming",
            "zip": "96950-2011",
            "country": "Rwanda"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/744.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ad688475-348b-4fdf-8bba-20c14a639dbf",
        "name": "Sue Larkin",
        "title": "International Configuration Planner",
        "address": {
            "street": "429 Elton Bypass",
            "city": "Jennyferville",
            "state": "Washington",
            "zip": "24176",
            "country": "Saint Helena"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/487.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "edd70943-f548-401e-8b81-dd6caeecd62b",
        "name": "Clay Feeney",
        "title": "Lead Data Officer",
        "address": {
            "street": "909 MacGyver Via",
            "city": "Chattanooga",
            "state": "North Carolina",
            "zip": "17902",
            "country": "Peru"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/640.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "51370f11-f478-4556-9f87-2964a4a7dada",
        "name": "Larry Barrows",
        "title": "Customer Applications Executive",
        "address": {
            "street": "185 Norris Circle",
            "city": "Carmelacester",
            "state": "Minnesota",
            "zip": "78547",
            "country": "Romania"
        },
        "avatar": "https://avatars.githubusercontent.com/u/62946987",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c4a61c0d-c068-45be-92a8-cdece4945c91",
        "name": "Evan Rohan",
        "title": "Future Mobility Planner",
        "address": {
            "street": "81093 MacGyver Village",
            "city": "Gary",
            "state": "Kansas",
            "zip": "89272-9555",
            "country": "Greenland"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/369.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3b678f31-2cb8-42c2-9677-6150f3241aec",
        "name": "Jana Zboncak",
        "title": "Principal Directives Planner",
        "address": {
            "street": "67981 Jaylan Pike",
            "city": "New Bedford",
            "state": "Kentucky",
            "zip": "99775-8917",
            "country": "Philippines"
        },
        "avatar": "https://avatars.githubusercontent.com/u/15665167",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "16953021-5f1d-410a-84b6-b7dbd1eb2fb3",
        "name": "Sonia Bode",
        "title": "Product Solutions Liaison",
        "address": {
            "street": "34598 Odessa Shoals",
            "city": "Christopville",
            "state": "Nebraska",
            "zip": "16359",
            "country": "Slovakia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/91155794",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fec6966f-2cb8-44e0-aced-dd38a8d01e09",
        "name": "Clint Cassin I",
        "title": "Direct Brand Designer",
        "address": {
            "street": "7416 Yundt Motorway",
            "city": "Candacebury",
            "state": "Delaware",
            "zip": "88198-4985",
            "country": "Solomon Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/66254398",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e8ca1244-33fa-4ca7-a842-f679dad5e945",
        "name": "Stacy Leffler",
        "title": "Direct Identity Agent",
        "address": {
            "street": "1454 Wolff Pike",
            "city": "Weissnathaven",
            "state": "Kentucky",
            "zip": "10361",
            "country": "Liechtenstein"
        },
        "avatar": "https://avatars.githubusercontent.com/u/29344232",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "838633fc-140b-4679-be1c-cda9da40177e",
        "name": "Richard Frami",
        "title": "Product Directives Associate",
        "address": {
            "street": "7066 Crawford Parkway",
            "city": "Killeen",
            "state": "Nevada",
            "zip": "80144-0535",
            "country": "Russian Federation"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/4.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6b609289-5848-4b10-9860-66aa4159f348",
        "name": "Miss Sonya Macejkovic",
        "title": "Legacy Intranet Liaison",
        "address": {
            "street": "26401 Schowalter Extension",
            "city": "O'Konfield",
            "state": "Indiana",
            "zip": "55474",
            "country": "Nauru"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/929.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8c04c995-232b-496e-959b-90f45260904a",
        "name": "Homer Lockman DVM",
        "title": "Global Assurance Administrator",
        "address": {
            "street": "232 Cronin Prairie",
            "city": "Sydniport",
            "state": "Connecticut",
            "zip": "96696-9945",
            "country": "Germany"
        },
        "avatar": "https://avatars.githubusercontent.com/u/12082129",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "aaba3562-dc57-4c35-8272-880cb44828b3",
        "name": "Mr. Orlando Gutmann",
        "title": "Senior Solutions Manager",
        "address": {
            "street": "679 Madaline Harbors",
            "city": "East Tyshawn",
            "state": "Idaho",
            "zip": "03287-3381",
            "country": "Slovenia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1220.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fa0a6d75-c4f8-46a3-bfe5-07be122aef8a",
        "name": "Luther Durgan",
        "title": "Legacy Optimization Coordinator",
        "address": {
            "street": "22729 Lane Manor",
            "city": "Hughfort",
            "state": "Utah",
            "zip": "32520-7672",
            "country": "Kyrgyz Republic"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/260.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d4608a32-2deb-4d1f-9da9-3120db7d49c4",
        "name": "Dr. Roxanne Schumm PhD",
        "title": "National Creative Producer",
        "address": {
            "street": "8433 Macejkovic Street",
            "city": "Lake Grayson",
            "state": "Iowa",
            "zip": "41815-9891",
            "country": "Spain"
        },
        "avatar": "https://avatars.githubusercontent.com/u/42628857",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "06b3e654-bfd2-4df6-a00a-b9a6be146fd2",
        "name": "Jasmine Reilly V",
        "title": "Lead Mobility Analyst",
        "address": {
            "street": "291 Brown Parkway",
            "city": "Port Charlotte",
            "state": "Nebraska",
            "zip": "63465-9946",
            "country": "Cote d'Ivoire"
        },
        "avatar": "https://avatars.githubusercontent.com/u/44679178",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7bfd14e9-2b45-4630-9fe0-cc520a060b7a",
        "name": "Madeline Russel",
        "title": "Human Tactics Designer",
        "address": {
            "street": "5059 Cayla Mission",
            "city": "Modesto",
            "state": "Massachusetts",
            "zip": "59686",
            "country": "Indonesia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/46858761",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "57f3173a-e0bb-4f93-a37b-e26cba79a54e",
        "name": "John Bailey",
        "title": "Legacy Branding Technician",
        "address": {
            "street": "64343 Alana Harbor",
            "city": "Titusville",
            "state": "Nebraska",
            "zip": "80374",
            "country": "Argentina"
        },
        "avatar": "https://avatars.githubusercontent.com/u/14395175",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5304d45a-41fa-459a-bbb4-9bd2bdae9227",
        "name": "Jerald Nicolas",
        "title": "National Applications Facilitator",
        "address": {
            "street": "3330 Little Rapids",
            "city": "New Morris",
            "state": "South Carolina",
            "zip": "37492-7500",
            "country": "Heard Island and McDonald Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/46604002",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "490a4e26-14a3-457b-8c30-72a0c6cef0ca",
        "name": "Manuel Wiegand-Kuvalis",
        "title": "District Brand Planner",
        "address": {
            "street": "91539 Antonia Squares",
            "city": "North Little Rock",
            "state": "Connecticut",
            "zip": "40876",
            "country": "Kyrgyz Republic"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1124.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ef902839-26b5-43ed-99d9-c7be8e84ea03",
        "name": "Dewey Collier",
        "title": "Legacy Integration Technician",
        "address": {
            "street": "65164 Imelda Path",
            "city": "Marcview",
            "state": "Wisconsin",
            "zip": "94180",
            "country": "China"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/343.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ec41184e-fdd3-403d-a816-5bbd69a730bc",
        "name": "Cathy Rodriguez Jr.",
        "title": "Chief Configuration Producer",
        "address": {
            "street": "52860 Arch Springs",
            "city": "Gunnarborough",
            "state": "Illinois",
            "zip": "30443-3506",
            "country": "Poland"
        },
        "avatar": "https://avatars.githubusercontent.com/u/45702788",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4c492b05-3fc2-4297-9d33-3d0ef399947d",
        "name": "Julie Mayer",
        "title": "Corporate Applications Liaison",
        "address": {
            "street": "911 Gladyce Brook",
            "city": "Haneville",
            "state": "Arizona",
            "zip": "35524-6345",
            "country": "Gibraltar"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/356.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "424435aa-66b6-4fa0-91e5-22bb7d09ab59",
        "name": "Dr. Gilbert Pfannerstill",
        "title": "District Configuration Coordinator",
        "address": {
            "street": "80615 Kirk Junction",
            "city": "East Andreane",
            "state": "Mississippi",
            "zip": "08347",
            "country": "Honduras"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/783.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "dca85729-6c9d-4e7e-a757-65041960ca8a",
        "name": "Aubrey Bogan",
        "title": "Human Web Supervisor",
        "address": {
            "street": "151 Treutel Mountains",
            "city": "Jefferymouth",
            "state": "New York",
            "zip": "42863-3960",
            "country": "Israel"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1224.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b6bd3928-4c53-41b1-bb62-a065b54fed5b",
        "name": "Mr. Pedro Altenwerth",
        "title": "Investor Data Consultant",
        "address": {
            "street": "538 Skylar Expressway",
            "city": "Port Novella",
            "state": "Ohio",
            "zip": "66746",
            "country": "India"
        },
        "avatar": "https://avatars.githubusercontent.com/u/20188193",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7b043fd6-cc5e-4dc9-90c5-a0750b11fe31",
        "name": "Jenna Haley",
        "title": "Chief Accounts Associate",
        "address": {
            "street": "9726 Caesar Crescent",
            "city": "Hackettside",
            "state": "Vermont",
            "zip": "07047",
            "country": "Moldova"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/216.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9801a072-e240-431f-ac30-ab260ffba101",
        "name": "Mr. Kyle Botsford",
        "title": "Chief Solutions Liaison",
        "address": {
            "street": "60109 Misael Courts",
            "city": "Kingville",
            "state": "Washington",
            "zip": "65639",
            "country": "French Polynesia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/80240977",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "42cae604-dbaf-44ed-824b-31dddb609812",
        "name": "Mr. Jason Wiegand",
        "title": "Central Mobility Liaison",
        "address": {
            "street": "98498 Pierce Orchard",
            "city": "Cynthiaview",
            "state": "Connecticut",
            "zip": "08352-4666",
            "country": "Heard Island and McDonald Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/46789858",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3f337eee-0fb9-4ae7-8fee-82d645dc7de1",
        "name": "Darrell Marks",
        "title": "Central Tactics Liaison",
        "address": {
            "street": "545 Keven Greens",
            "city": "Casper",
            "state": "Tennessee",
            "zip": "48704-0263",
            "country": "Vietnam"
        },
        "avatar": "https://avatars.githubusercontent.com/u/96189054",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f18cc76e-24e3-4aa5-aa63-12772b3b64f0",
        "name": "Toni Shanahan",
        "title": "International Functionality Specialist",
        "address": {
            "street": "441 Kuhlman Stream",
            "city": "South Fordfield",
            "state": "Pennsylvania",
            "zip": "36844",
            "country": "Nigeria"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/244.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a6cf5397-da72-46c3-95a8-ae6e7399a0f8",
        "name": "Clay Weissnat",
        "title": "Legacy Research Representative",
        "address": {
            "street": "12251 Ruby Hill",
            "city": "Port Briannefort",
            "state": "Alaska",
            "zip": "22359",
            "country": "Georgia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1179.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "40adec3e-a483-4b4a-a9d1-4a6e924d3451",
        "name": "Nina Stracke",
        "title": "Lead Paradigm Strategist",
        "address": {
            "street": "82522 Upton Haven",
            "city": "East Caroline",
            "state": "Wyoming",
            "zip": "52895",
            "country": "Guyana"
        },
        "avatar": "https://avatars.githubusercontent.com/u/29383427",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "48f64b2a-3be5-4afc-bbda-947929e6bdfd",
        "name": "Rosie Orn",
        "title": "Direct Response Engineer",
        "address": {
            "street": "5323 Dangelo Landing",
            "city": "Charlottetown",
            "state": "Alabama",
            "zip": "14555",
            "country": "Equatorial Guinea"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1000.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "cf333af8-490e-4839-b662-a3f073d2d342",
        "name": "Antonia Lehner Jr.",
        "title": "Regional Program Executive",
        "address": {
            "street": "68810 Icie Field",
            "city": "Bell Gardens",
            "state": "South Dakota",
            "zip": "67270-2948",
            "country": "New Zealand"
        },
        "avatar": "https://avatars.githubusercontent.com/u/47294864",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "41ad2733-9e47-4683-9fa3-ec0569742136",
        "name": "Miss Gail Olson",
        "title": "Internal Factors Developer",
        "address": {
            "street": "4257 Steuber Expressway",
            "city": "Janesville",
            "state": "Rhode Island",
            "zip": "78768",
            "country": "British Indian Ocean Territory (Chagos Archipelago)"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/966.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "75ef7784-d18d-44ad-8293-fa41bac646c5",
        "name": "Lynette Parisian",
        "title": "Internal Functionality Developer",
        "address": {
            "street": "6652 Dibbert Prairie",
            "city": "Kirstinside",
            "state": "Kentucky",
            "zip": "32102",
            "country": "United States Minor Outlying Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/855.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3bee341c-92e6-4bcd-9a00-f6c870fbbf25",
        "name": "Robin Littel",
        "title": "Human Brand Developer",
        "address": {
            "street": "39062 Johnpaul Burg",
            "city": "Pasco",
            "state": "West Virginia",
            "zip": "61030-3526",
            "country": "Namibia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/78265743",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "348dcb1b-0c13-4ed9-9ecf-fbefb4ea68e2",
        "name": "Oliver Bogisich",
        "title": "Forward Accounts Associate",
        "address": {
            "street": "10998 Broderick Field",
            "city": "South Nathanaelshire",
            "state": "Arizona",
            "zip": "49662",
            "country": "Greenland"
        },
        "avatar": "https://avatars.githubusercontent.com/u/48929414",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4fa6e86e-2020-43b3-a7a4-8c8b206c65f7",
        "name": "Mrs. Beatrice Hamill",
        "title": "Dynamic Quality Liaison",
        "address": {
            "street": "7922 Meta Coves",
            "city": "Blaketown",
            "state": "Ohio",
            "zip": "05156",
            "country": "Sierra Leone"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/248.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7f19cd85-124b-448b-87ed-15dbf1290021",
        "name": "Dean Hodkiewicz",
        "title": "Forward Paradigm Officer",
        "address": {
            "street": "892 Rae Parkway",
            "city": "Quigleyborough",
            "state": "New Hampshire",
            "zip": "44194",
            "country": "Christmas Island"
        },
        "avatar": "https://avatars.githubusercontent.com/u/33310681",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "13402307-429a-457f-bea7-d37a9818edd7",
        "name": "Ernestine Muller",
        "title": "Product Identity Administrator",
        "address": {
            "street": "802 Powlowski Parkways",
            "city": "National City",
            "state": "Kansas",
            "zip": "11648",
            "country": "Cambodia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/676.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0dc84c75-a1d0-483d-a9dd-3d46fa58a4ce",
        "name": "Sophie Cruickshank",
        "title": "Human Group Facilitator",
        "address": {
            "street": "9826 Kerluke Ford",
            "city": "West Darrellport",
            "state": "Maryland",
            "zip": "69523-0723",
            "country": "Lithuania"
        },
        "avatar": "https://avatars.githubusercontent.com/u/89073172",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "108809bf-bae7-4c4b-9937-be1c161db408",
        "name": "Kim Beatty",
        "title": "Regional Mobility Director",
        "address": {
            "street": "735 Batz Trail",
            "city": "Karatown",
            "state": "Iowa",
            "zip": "74982",
            "country": "Australia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/631.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c3dd1f47-e3aa-4abd-a55c-5819571e8af5",
        "name": "Eva Howe",
        "title": "Future Intranet Director",
        "address": {
            "street": "4715 Hackett Garden",
            "city": "South Garnett",
            "state": "California",
            "zip": "89177",
            "country": "Kyrgyz Republic"
        },
        "avatar": "https://avatars.githubusercontent.com/u/37856314",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ba743431-009f-4e12-825b-837a491d4e9f",
        "name": "Santos Jacobs",
        "title": "Lead Creative Liaison",
        "address": {
            "street": "58482 Jakubowski Forest",
            "city": "South Drew",
            "state": "New York",
            "zip": "59410-4149",
            "country": "Slovakia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/32340495",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b6c5ce66-e3e4-4c77-87cc-57d024f1d9e6",
        "name": "Oscar Olson DDS",
        "title": "District Security Associate",
        "address": {
            "street": "8369 Luisa Greens",
            "city": "Rueckerview",
            "state": "Louisiana",
            "zip": "31696",
            "country": "Burkina Faso"
        },
        "avatar": "https://avatars.githubusercontent.com/u/57135669",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "34c2b65f-d4d1-4d62-9694-910a63bab6d2",
        "name": "Stella Leffler",
        "title": "Lead Optimization Strategist",
        "address": {
            "street": "6175 Mills Manor",
            "city": "East Hartford",
            "state": "Massachusetts",
            "zip": "76391-7485",
            "country": "Democratic People's Republic of Korea"
        },
        "avatar": "https://avatars.githubusercontent.com/u/33026051",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "60d95e5f-54b8-441f-bd16-5b574a3dec70",
        "name": "Alberto Volkman",
        "title": "Direct Infrastructure Administrator",
        "address": {
            "street": "8960 Conroy Stravenue",
            "city": "Sipeshaven",
            "state": "Iowa",
            "zip": "02973",
            "country": "Uzbekistan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/400.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "29f2fb4a-e960-476a-80c0-8fea85d4c354",
        "name": "Kay Murray",
        "title": "Human Division Supervisor",
        "address": {
            "street": "25031 Ritchie Freeway",
            "city": "Jasenhaven",
            "state": "North Dakota",
            "zip": "61596-7678",
            "country": "Svalbard & Jan Mayen Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/7160024",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0cce725e-6b9c-4a99-99e3-5e6f07d402a9",
        "name": "Raymond Barton",
        "title": "Internal Quality Executive",
        "address": {
            "street": "6704 Lakin Cove",
            "city": "Yakima",
            "state": "Louisiana",
            "zip": "72624-3398",
            "country": "Martinique"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/789.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8a77c705-45b6-4aef-b1de-24c4bfa08cd0",
        "name": "Hilda Gorczany",
        "title": "Corporate Accountability Consultant",
        "address": {
            "street": "521 Abernathy Lights",
            "city": "East Salliestad",
            "state": "Nebraska",
            "zip": "27047",
            "country": "Tuvalu"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/281.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b9faff5c-fd4f-44d6-8ae9-a63f7db38e03",
        "name": "Steven Conroy",
        "title": "Global Intranet Manager",
        "address": {
            "street": "5468 Beatty Wells",
            "city": "North Ona",
            "state": "Illinois",
            "zip": "38038-8899",
            "country": "Uzbekistan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/3347632",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "69b76342-c38d-40fe-8716-ca934304fccd",
        "name": "Jeremiah Jast",
        "title": "Corporate Tactics Director",
        "address": {
            "street": "14851 Delta Cliff",
            "city": "Terranceberg",
            "state": "Tennessee",
            "zip": "88876",
            "country": "Montserrat"
        },
        "avatar": "https://avatars.githubusercontent.com/u/94258079",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "84a09a7f-f184-4f12-b077-6b0ad61a9bdd",
        "name": "Julian White",
        "title": "Forward Accountability Specialist",
        "address": {
            "street": "79948 Kuhn Cape",
            "city": "Lake Tara",
            "state": "Illinois",
            "zip": "42758",
            "country": "New Caledonia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/76420258",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6dfa1958-93c6-4d84-930f-8fe4d525f7a2",
        "name": "Dr. Tami Kutch-Hand",
        "title": "District Creative Developer",
        "address": {
            "street": "12675 Meaghan Garden",
            "city": "Naderburgh",
            "state": "Arizona",
            "zip": "17679-0130",
            "country": "Bonaire, Sint Eustatius and Saba"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/965.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8c51baf5-745c-4834-a393-a28fb25c7fff",
        "name": "Danny Weber",
        "title": "Forward Research Specialist",
        "address": {
            "street": "607 Williamson Camp",
            "city": "New Johnpaul",
            "state": "Missouri",
            "zip": "24398-2985",
            "country": "Madagascar"
        },
        "avatar": "https://avatars.githubusercontent.com/u/23720206",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fbb28ab0-fb00-4436-a956-f3f662c162b0",
        "name": "Nick Miller",
        "title": "Investor Program Engineer",
        "address": {
            "street": "5369 Kareem Island",
            "city": "Davenport",
            "state": "Wisconsin",
            "zip": "77076-6551",
            "country": "American Samoa"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/27.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "03a3deb0-4227-4e96-b945-f790c2b62bf3",
        "name": "Tabitha McCullough",
        "title": "District Applications Producer",
        "address": {
            "street": "67362 Reese Wells",
            "city": "Amarillo",
            "state": "South Dakota",
            "zip": "12631-2729",
            "country": "Finland"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/572.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8677f126-9a50-493f-8d22-8919dae30019",
        "name": "Roger Kuvalis",
        "title": "District Research Director",
        "address": {
            "street": "65554 Rice Place",
            "city": "Fort Andreanetown",
            "state": "Maine",
            "zip": "66839",
            "country": "Isle of Man"
        },
        "avatar": "https://avatars.githubusercontent.com/u/70786198",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8813168f-44d5-4d2b-8cd6-e2f0f5bcf896",
        "name": "Jo Wunsch",
        "title": "Corporate Security Manager",
        "address": {
            "street": "9812 Beier Highway",
            "city": "Federal Way",
            "state": "Kansas",
            "zip": "27785",
            "country": "Serbia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/66462806",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "02333146-fc6e-4035-9c94-1ca94f402987",
        "name": "Leslie Schoen DDS",
        "title": "Legacy Group Planner",
        "address": {
            "street": "44621 Sheridan Spur",
            "city": "New Brandy",
            "state": "Arizona",
            "zip": "23423-1705",
            "country": "Djibouti"
        },
        "avatar": "https://avatars.githubusercontent.com/u/92448265",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "27e26488-054a-48dc-ae7a-d70c523ce961",
        "name": "Charlene Reichel PhD",
        "title": "Dynamic Division Developer",
        "address": {
            "street": "82027 Isobel Ranch",
            "city": "Fort Othoton",
            "state": "Michigan",
            "zip": "78293",
            "country": "Virgin Islands, U.S."
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/168.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7c229534-53d7-4898-9a53-ae04787121d7",
        "name": "Ms. Cora Heaney",
        "title": "Regional Branding Associate",
        "address": {
            "street": "6423 Spencer Lodge",
            "city": "Filomenaville",
            "state": "Hawaii",
            "zip": "79142-5751",
            "country": "Palau"
        },
        "avatar": "https://avatars.githubusercontent.com/u/4329602",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f700d462-0f35-4afa-9d60-5ef220ab4c1c",
        "name": "Tasha Stokes",
        "title": "Lead Factors Designer",
        "address": {
            "street": "24423 Dolores Underpass",
            "city": "Sunnyvale",
            "state": "New Hampshire",
            "zip": "32215",
            "country": "Eswatini"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/126.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3780bffc-6e14-45c3-b5a8-6449f32d04fc",
        "name": "Estelle Kilback Sr.",
        "title": "Principal Accountability Strategist",
        "address": {
            "street": "970 Abernathy Ford",
            "city": "Pagacfort",
            "state": "New Mexico",
            "zip": "24220-5173",
            "country": "Falkland Islands (Malvinas)"
        },
        "avatar": "https://avatars.githubusercontent.com/u/49286666",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "31bc9f59-f398-4ed0-87c8-370ae0d5c33a",
        "name": "Lorraine Osinski",
        "title": "Corporate Implementation Agent",
        "address": {
            "street": "82258 Jerald Manor",
            "city": "Kentonmouth",
            "state": "Delaware",
            "zip": "76460",
            "country": "Haiti"
        },
        "avatar": "https://avatars.githubusercontent.com/u/24881641",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e55401bc-26e2-41eb-8ece-05e2af472cd4",
        "name": "Manuel Grant",
        "title": "Forward Factors Planner",
        "address": {
            "street": "26849 Fermin Bridge",
            "city": "Phoenix",
            "state": "Nevada",
            "zip": "80149",
            "country": "Mayotte"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/664.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3ab6de65-c4f8-4435-9112-b2e6d2e5ce1a",
        "name": "Eileen Marvin",
        "title": "International Infrastructure Manager",
        "address": {
            "street": "721 Halvorson Inlet",
            "city": "Winnifredstad",
            "state": "Iowa",
            "zip": "39625",
            "country": "Israel"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1129.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8ec0f4bc-4552-4648-896a-c41099eb30ef",
        "name": "Lydia Oberbrunner",
        "title": "Forward Integration Director",
        "address": {
            "street": "94455 Yasmeen Viaduct",
            "city": "Everettfort",
            "state": "Kansas",
            "zip": "31015",
            "country": "Sao Tome and Principe"
        },
        "avatar": "https://avatars.githubusercontent.com/u/62316754",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "dc44030e-9c63-49f5-9e2a-96dc9cde2707",
        "name": "Gilbert Ullrich",
        "title": "Investor Communications Consultant",
        "address": {
            "street": "96842 Ophelia Centers",
            "city": "Battle Creek",
            "state": "Mississippi",
            "zip": "96042",
            "country": "Guernsey"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1039.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4183242e-a28d-4a20-b69f-cecc2ce673b6",
        "name": "Isabel Ritchie",
        "title": "Chief Brand Representative",
        "address": {
            "street": "81022 Padberg Alley",
            "city": "Boyleport",
            "state": "South Dakota",
            "zip": "61602-2987",
            "country": "Indonesia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/851.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e18d06b5-d894-431d-959d-ceccca7f7c15",
        "name": "Steven West MD",
        "title": "Global Division Administrator",
        "address": {
            "street": "103 Gislason Haven",
            "city": "Winfieldbury",
            "state": "New Hampshire",
            "zip": "77963-0070",
            "country": "Dominica"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/356.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0e5d2c15-ff49-43d1-a512-6482c4c7081a",
        "name": "Sean Kunde DVM",
        "title": "Legacy Identity Facilitator",
        "address": {
            "street": "8507 Einar Viaduct",
            "city": "Fort Chadd",
            "state": "Wisconsin",
            "zip": "88889-1955",
            "country": "Luxembourg"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/78.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2050ded4-5b79-4455-9e78-a17712b21708",
        "name": "Rosemary Kassulke-Monahan",
        "title": "Chief Quality Executive",
        "address": {
            "street": "4470 Balistreri Drive",
            "city": "West Rossieboro",
            "state": "Alaska",
            "zip": "58052-0505",
            "country": "Iceland"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/964.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c5c89626-ca6a-41d0-9106-ae021f090ea9",
        "name": "Alex Harvey-Frami",
        "title": "Customer Integration Producer",
        "address": {
            "street": "8714 Brendan Gateway",
            "city": "Kleinshire",
            "state": "Arkansas",
            "zip": "80193",
            "country": "Madagascar"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/249.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1c54b216-a736-4083-a8f0-111edb98cc65",
        "name": "Myron Koelpin",
        "title": "Chief Paradigm Technician",
        "address": {
            "street": "338 Thiel Estates",
            "city": "West Mina",
            "state": "Rhode Island",
            "zip": "24671",
            "country": "Madagascar"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/128.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a0634bb3-f641-4ef7-be3b-ce550459f946",
        "name": "Jackie Smitham",
        "title": "Forward Research Supervisor",
        "address": {
            "street": "26466 Stark Landing",
            "city": "Port Shaniya",
            "state": "Michigan",
            "zip": "50570-0514",
            "country": "Comoros"
        },
        "avatar": "https://avatars.githubusercontent.com/u/91194039",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "379b3d58-ba82-4712-84e4-98c1df0fbc34",
        "name": "Dr. Jerome O'Connell",
        "title": "Investor Response Developer",
        "address": {
            "street": "2606 Peter Forges",
            "city": "East Honolulu",
            "state": "Wisconsin",
            "zip": "59424-9913",
            "country": "Holy See (Vatican City State)"
        },
        "avatar": "https://avatars.githubusercontent.com/u/40100223",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c5dda2e8-1b97-48ac-b0d5-d4ce85efe93b",
        "name": "Elmer Hermiston",
        "title": "Dynamic Security Associate",
        "address": {
            "street": "9654 Spencer Lodge",
            "city": "Lacey",
            "state": "Delaware",
            "zip": "31801",
            "country": "Algeria"
        },
        "avatar": "https://avatars.githubusercontent.com/u/96338004",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ec3eb55e-710d-4093-a709-6ddb98701913",
        "name": "Douglas Kunde V",
        "title": "Central Marketing Engineer",
        "address": {
            "street": "1446 Bell Burg",
            "city": "Kochtown",
            "state": "Oregon",
            "zip": "10910-2555",
            "country": "Bangladesh"
        },
        "avatar": "https://avatars.githubusercontent.com/u/36317901",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e93bec6e-1b50-4b05-8b4d-55acf7485f34",
        "name": "Mona Ebert",
        "title": "Internal Paradigm Analyst",
        "address": {
            "street": "21543 Effertz Valley",
            "city": "Ratkestad",
            "state": "New York",
            "zip": "56735",
            "country": "Gabon"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1067.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3cd15e0a-b91d-4ee9-af17-d07653af9618",
        "name": "Susan Terry",
        "title": "Central Metrics Assistant",
        "address": {
            "street": "862 Kirlin Hill",
            "city": "East Halie",
            "state": "Ohio",
            "zip": "87181",
            "country": "Kenya"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/588.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c53a0137-481e-4b9c-b562-46a37a960b5c",
        "name": "Katherine Cartwright",
        "title": "District Quality Engineer",
        "address": {
            "street": "195 Trantow Mill",
            "city": "Abshireburgh",
            "state": "Washington",
            "zip": "00378-2594",
            "country": "Curacao"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/843.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "bd6430d6-9a73-4465-973d-a525d4869ae1",
        "name": "Judith Wyman",
        "title": "Dynamic Solutions Representative",
        "address": {
            "street": "46114 Eva Grove",
            "city": "Royal Oak",
            "state": "North Carolina",
            "zip": "33872",
            "country": "Belgium"
        },
        "avatar": "https://avatars.githubusercontent.com/u/21010797",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7304dc08-3440-4c2c-9806-ab79e7f6ef88",
        "name": "Gretchen Breitenberg",
        "title": "National Accounts Specialist",
        "address": {
            "street": "3342 Zieme Mews",
            "city": "Juniusburgh",
            "state": "Oregon",
            "zip": "78021-3693",
            "country": "Liberia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/98885908",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a48c4459-8aa6-4189-a015-0b0ac4cc1b15",
        "name": "Willis Rolfson",
        "title": "International Interactions Coordinator",
        "address": {
            "street": "19381 Rossie Place",
            "city": "Suffolk",
            "state": "Tennessee",
            "zip": "33171-8405",
            "country": "Bahamas"
        },
        "avatar": "https://avatars.githubusercontent.com/u/74719586",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a1369b4d-a59a-4052-a6e3-174b05914ea8",
        "name": "Nina Berge",
        "title": "Regional Division Representative",
        "address": {
            "street": "8359 Ally Rest",
            "city": "Arvada",
            "state": "Louisiana",
            "zip": "65853",
            "country": "Grenada"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/893.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "65ce20df-9fbd-44fa-ad09-190367b63394",
        "name": "Robyn Farrell",
        "title": "Global Division Technician",
        "address": {
            "street": "14093 Glover Shoals",
            "city": "Adelbertland",
            "state": "Rhode Island",
            "zip": "44285",
            "country": "Panama"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/581.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c5ce7b91-4103-42f7-bd85-f8e0968bea15",
        "name": "Dr. Randal Douglas",
        "title": "Product Optimization Producer",
        "address": {
            "street": "896 Ziemann Union",
            "city": "Doloresburgh",
            "state": "Maryland",
            "zip": "12005-5271",
            "country": "Togo"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/730.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4ba53769-e451-403d-997b-8586270ee04c",
        "name": "Kristy Friesen",
        "title": "Forward Infrastructure Technician",
        "address": {
            "street": "152 Breana Villages",
            "city": "Christinaboro",
            "state": "Wisconsin",
            "zip": "39562-7346",
            "country": "Ireland"
        },
        "avatar": "https://avatars.githubusercontent.com/u/28106789",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3fb5b8f1-b09b-4392-a6df-11292ae9838a",
        "name": "Dianne Kulas",
        "title": "Dynamic Assurance Specialist",
        "address": {
            "street": "7195 Hirthe Circle",
            "city": "Port Madgeboro",
            "state": "Oklahoma",
            "zip": "70021-2963",
            "country": "French Guiana"
        },
        "avatar": "https://avatars.githubusercontent.com/u/68911913",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "754961ca-35ef-4aea-9978-99fa25caa2ff",
        "name": "Juanita Schoen",
        "title": "Central Usability Engineer",
        "address": {
            "street": "92283 Luettgen Ranch",
            "city": "Hialeah",
            "state": "Rhode Island",
            "zip": "25409-2035",
            "country": "Cyprus"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/453.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "564585a3-6af5-40fc-83fd-f5363dc059b6",
        "name": "Eva Berge",
        "title": "Senior Branding Analyst",
        "address": {
            "street": "4168 Hartmann Spring",
            "city": "Colliershire",
            "state": "Vermont",
            "zip": "73591-7389",
            "country": "Qatar"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/210.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "672b8d23-0e51-439a-9f7a-4e9b3a276578",
        "name": "Miss Pam Raynor",
        "title": "Investor Security Coordinator",
        "address": {
            "street": "80316 Krajcik Roads",
            "city": "Darionfield",
            "state": "Louisiana",
            "zip": "69189-8455",
            "country": "Cayman Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/76747734",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "37fdf515-2fb5-4e87-9682-eb695ebdce02",
        "name": "Juanita Orn",
        "title": "Future Program Officer",
        "address": {
            "street": "76584 Fadel Glen",
            "city": "Daly City",
            "state": "Utah",
            "zip": "37106",
            "country": "Thailand"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/949.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7175598e-f9f5-4d1a-bbec-963dbafa07cb",
        "name": "Mr. Jesus Bartoletti",
        "title": "Chief Intranet Designer",
        "address": {
            "street": "2646 Gail Falls",
            "city": "Willview",
            "state": "Hawaii",
            "zip": "65961-2053",
            "country": "Aruba"
        },
        "avatar": "https://avatars.githubusercontent.com/u/98909278",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5a3c46c6-db09-4df1-bb09-51af540d5185",
        "name": "Grace Hartmann PhD",
        "title": "Product Usability Associate",
        "address": {
            "street": "771 Beryl Expressway",
            "city": "Warren",
            "state": "Delaware",
            "zip": "16166",
            "country": "Angola"
        },
        "avatar": "https://avatars.githubusercontent.com/u/92131747",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fdebd240-8683-43d9-9d88-92078dfba7c6",
        "name": "Kenny Stiedemann-Beer",
        "title": "Future Paradigm Developer",
        "address": {
            "street": "325 Jacobs Gateway",
            "city": "Fort Breanaport",
            "state": "Utah",
            "zip": "82532-4745",
            "country": "Pakistan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/589.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e35ceab0-aa24-41de-95d8-885231bafa19",
        "name": "Marguerite Daugherty",
        "title": "International Applications Analyst",
        "address": {
            "street": "235 Anne Union",
            "city": "Schmidthaven",
            "state": "Nevada",
            "zip": "71386",
            "country": "Sudan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/594.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1b251368-6075-474e-bdaf-f52a8a3d0cad",
        "name": "Clint Beahan",
        "title": "Direct Assurance Manager",
        "address": {
            "street": "5533 Gottlieb Manor",
            "city": "New Eastonshire",
            "state": "North Carolina",
            "zip": "55231-1173",
            "country": "Maldives"
        },
        "avatar": "https://avatars.githubusercontent.com/u/15720003",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2eb25482-f405-4a0c-b8f4-627e5227dbc4",
        "name": "Leon Robel V",
        "title": "Legacy Marketing Orchestrator",
        "address": {
            "street": "30554 Zack Land",
            "city": "Medford",
            "state": "Vermont",
            "zip": "05913-7198",
            "country": "Faroe Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1100.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5fc1700b-6654-4099-b650-dab3fa66a36f",
        "name": "Dr. William Cremin",
        "title": "Regional Program Agent",
        "address": {
            "street": "56241 Yost Lock",
            "city": "Woodland",
            "state": "Delaware",
            "zip": "24588",
            "country": "Svalbard & Jan Mayen Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/305.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "21040f98-cdd7-413b-827b-1af22da11ae9",
        "name": "Candace Gusikowski III",
        "title": "National Infrastructure Consultant",
        "address": {
            "street": "629 Orlando Throughway",
            "city": "New Bradford",
            "state": "Washington",
            "zip": "54102",
            "country": "Italy"
        },
        "avatar": "https://avatars.githubusercontent.com/u/56724397",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d1ec50a2-3f4a-4712-adc8-06e7a08cc88f",
        "name": "Mr. Corey Keeling",
        "title": "Senior Implementation Director",
        "address": {
            "street": "632 Friedrich Squares",
            "city": "Isacborough",
            "state": "Delaware",
            "zip": "20690-8083",
            "country": "Antigua and Barbuda"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/324.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0d5f3515-7e2b-42a7-81b7-1a8291d514c3",
        "name": "Marshall Ruecker",
        "title": "Legacy Creative Coordinator",
        "address": {
            "street": "652 Wintheiser Glen",
            "city": "Ritchieview",
            "state": "Hawaii",
            "zip": "01485",
            "country": "Grenada"
        },
        "avatar": "https://avatars.githubusercontent.com/u/28179078",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b214ba78-1f81-440c-9874-92f099102a6a",
        "name": "Rachel Friesen",
        "title": "Product Functionality Administrator",
        "address": {
            "street": "792 Forest Ridge",
            "city": "Mesa",
            "state": "Virginia",
            "zip": "16083",
            "country": "Kyrgyz Republic"
        },
        "avatar": "https://avatars.githubusercontent.com/u/83788955",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "adb473c6-94cb-4f88-b2e7-7ce4bba04e8b",
        "name": "Henry Streich",
        "title": "District Program Consultant",
        "address": {
            "street": "9321 Wehner Drive",
            "city": "Union City",
            "state": "Iowa",
            "zip": "59272",
            "country": "Uganda"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/504.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "38ec56df-59bf-4374-af43-348114bd6b13",
        "name": "Lisa King V",
        "title": "Human Applications Officer",
        "address": {
            "street": "64086 Jaime Groves",
            "city": "Cambridge",
            "state": "Idaho",
            "zip": "05571-9061",
            "country": "Zimbabwe"
        },
        "avatar": "https://avatars.githubusercontent.com/u/51424988",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "28900765-e16f-4346-8847-4961f4537e41",
        "name": "Jean Schmitt",
        "title": "Corporate Accounts Planner",
        "address": {
            "street": "4700 Cecilia Corners",
            "city": "Dorthystad",
            "state": "Florida",
            "zip": "64683",
            "country": "Turkmenistan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/14387601",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e507c8d1-3e73-4308-b6cd-3c72cb494ccd",
        "name": "Iris Robel-Crooks",
        "title": "Internal Directives Specialist",
        "address": {
            "street": "813 Johns Road",
            "city": "Methuen Town",
            "state": "South Carolina",
            "zip": "46980",
            "country": "Rwanda"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/798.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "372f80a6-1277-498c-add0-26271bb78ed6",
        "name": "Camille Pouros III",
        "title": "National Quality Administrator",
        "address": {
            "street": "71231 Rene Locks",
            "city": "New Agustinberg",
            "state": "Montana",
            "zip": "37364-1212",
            "country": "Taiwan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/9.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "03671aa0-a37a-42f0-8cb7-e7101a86e30f",
        "name": "Yolanda Ziemann",
        "title": "Investor Response Assistant",
        "address": {
            "street": "925 Willow Garden",
            "city": "Elmoreside",
            "state": "Idaho",
            "zip": "84241",
            "country": "Norfolk Island"
        },
        "avatar": "https://avatars.githubusercontent.com/u/37356888",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9ba6ec96-596f-4a80-8801-5b85a4f6e11d",
        "name": "Mr. Johnathan Schowalter",
        "title": "Product Intranet Manager",
        "address": {
            "street": "50896 Tressa River",
            "city": "Reedville",
            "state": "Maine",
            "zip": "54501-6755",
            "country": "Georgia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/924.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "73ab8750-4be8-4cf8-a049-4cef133a9bac",
        "name": "Peter Maggio",
        "title": "Internal Integration Designer",
        "address": {
            "street": "325 Vandervort Fords",
            "city": "West Albertville",
            "state": "Arkansas",
            "zip": "13340-7070",
            "country": "China"
        },
        "avatar": "https://avatars.githubusercontent.com/u/69156689",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "10a7f27c-c17b-47c2-a378-33b9b95df097",
        "name": "Angel Heathcote",
        "title": "National Data Assistant",
        "address": {
            "street": "1968 Harry Knoll",
            "city": "Margaretfield",
            "state": "Utah",
            "zip": "65327-6973",
            "country": "Norfolk Island"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/332.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "066036f2-6be2-4a75-9503-9735f04191a8",
        "name": "Natalie Blanda-Hilll",
        "title": "Internal Accounts Executive",
        "address": {
            "street": "9531 Weimann Ford",
            "city": "Port Timothyland",
            "state": "Ohio",
            "zip": "52018",
            "country": "Italy"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/208.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "aecc02d8-b78d-49fb-b690-905d1ac49f75",
        "name": "Shelly Sporer Jr.",
        "title": "Direct Usability Analyst",
        "address": {
            "street": "690 Kuhn Pike",
            "city": "Gaithersburg",
            "state": "Kansas",
            "zip": "85531",
            "country": "Sudan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/377.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0048b249-f34a-45dc-9e91-677e28075fce",
        "name": "Chelsea Fadel",
        "title": "Chief Factors Agent",
        "address": {
            "street": "45323 Gusikowski Forges",
            "city": "Homenickberg",
            "state": "Maine",
            "zip": "48542-8898",
            "country": "Turkmenistan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/17745445",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "666d4dc3-d060-4a04-9bd6-6782ab03a51e",
        "name": "Walter Simonis",
        "title": "District Group Coordinator",
        "address": {
            "street": "445 Juston Oval",
            "city": "Port Solon",
            "state": "New Mexico",
            "zip": "43736",
            "country": "Micronesia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/22441676",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5f0b8f03-3ee4-4521-ab80-badd6792ba7e",
        "name": "Noel Bernhard",
        "title": "Future Identity Strategist",
        "address": {
            "street": "39007 Windler Mills",
            "city": "New Mohammad",
            "state": "Oregon",
            "zip": "63200-0642",
            "country": "Austria"
        },
        "avatar": "https://avatars.githubusercontent.com/u/53992927",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "96853000-a17a-4c9b-8c3d-cd9be76b42df",
        "name": "Gretchen Rutherford",
        "title": "Dynamic Creative Engineer",
        "address": {
            "street": "61686 Altenwerth Summit",
            "city": "Schadenshire",
            "state": "Indiana",
            "zip": "98252-5881",
            "country": "Colombia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/58617589",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6d0d4be4-7598-424f-84ed-4a0fd9371ef6",
        "name": "Harry Robel",
        "title": "District Infrastructure Orchestrator",
        "address": {
            "street": "15150 Tremblay Crescent",
            "city": "New Haven",
            "state": "Ohio",
            "zip": "45997-4724",
            "country": "Bolivia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/180.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "dc7656c7-e1d8-42c9-938e-14771a9a9b26",
        "name": "Lucia Kozey",
        "title": "Product Group Assistant",
        "address": {
            "street": "329 Caterina Branch",
            "city": "Newport Beach",
            "state": "Virginia",
            "zip": "71795-0967",
            "country": "Democratic Republic of the Congo"
        },
        "avatar": "https://avatars.githubusercontent.com/u/6787480",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7365ad3e-fbe3-4c1d-8c6b-0751565c2fde",
        "name": "Rolando Bailey",
        "title": "Legacy Data Supervisor",
        "address": {
            "street": "5619 Stroman Skyway",
            "city": "Hamillhaven",
            "state": "New York",
            "zip": "64461-0216",
            "country": "North Macedonia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/78023309",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d929c93b-b5de-48cd-b44c-4cdc35b1ca46",
        "name": "Jeffrey Dickens",
        "title": "Principal Factors Facilitator",
        "address": {
            "street": "492 Hulda Port",
            "city": "Lake Lucius",
            "state": "New Hampshire",
            "zip": "71271",
            "country": "Andorra"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1228.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "51f70d74-a3ff-4cdf-aa8d-e0b153e0d4bf",
        "name": "Bob Paucek",
        "title": "Global Implementation Specialist",
        "address": {
            "street": "7488 Adams Plain",
            "city": "Lake Otiliahaven",
            "state": "Florida",
            "zip": "70451",
            "country": "Christmas Island"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1111.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "64961f41-f661-4c7b-a7cc-1db7d7c34608",
        "name": "Alfred Hills",
        "title": "Investor Group Supervisor",
        "address": {
            "street": "6218 Stokes Club",
            "city": "East Danielaport",
            "state": "New Hampshire",
            "zip": "78757-7432",
            "country": "Switzerland"
        },
        "avatar": "https://avatars.githubusercontent.com/u/45329372",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "15e6c963-b2bf-40c5-a12e-75f6380f2b57",
        "name": "Jeanette Lakin DDS",
        "title": "Regional Infrastructure Orchestrator",
        "address": {
            "street": "7500 Mills Spring",
            "city": "Jessefield",
            "state": "West Virginia",
            "zip": "25079",
            "country": "Greenland"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/796.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a08fd4f5-8b4d-4166-9f6b-6560e37fc429",
        "name": "Darnell Wunsch",
        "title": "Legacy Quality Liaison",
        "address": {
            "street": "11240 Noel Roads",
            "city": "Fort Hayley",
            "state": "West Virginia",
            "zip": "33123-8528",
            "country": "Niger"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/533.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "09259572-4985-4f48-8fe9-50832b037484",
        "name": "Alyssa Kohler",
        "title": "Direct Quality Coordinator",
        "address": {
            "street": "8719 Braeden Views",
            "city": "Oxnard",
            "state": "Tennessee",
            "zip": "14270",
            "country": "Virgin Islands, U.S."
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1214.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9c7e4f97-b153-40b0-9421-99fcd1ecac27",
        "name": "Dr. Stephen Harber",
        "title": "Legacy Program Agent",
        "address": {
            "street": "52451 Jayson Point",
            "city": "West Benny",
            "state": "South Carolina",
            "zip": "51305",
            "country": "Kenya"
        },
        "avatar": "https://avatars.githubusercontent.com/u/28793009",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "bc122b19-ad2e-48fa-adcd-042e2e67ef17",
        "name": "Charlie Murray",
        "title": "Regional Interactions Orchestrator",
        "address": {
            "street": "6967 Hermann Forge",
            "city": "Lake Hollis",
            "state": "Wisconsin",
            "zip": "86820-4635",
            "country": "Guatemala"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/466.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1cc5288d-b262-4ac3-b9c0-bf7fd24c11bf",
        "name": "Elbert Blick",
        "title": "Lead Research Administrator",
        "address": {
            "street": "342 Funk Rapids",
            "city": "East Olinfort",
            "state": "Mississippi",
            "zip": "59776-2594",
            "country": "Christmas Island"
        },
        "avatar": "https://avatars.githubusercontent.com/u/35457117",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fcb0f9e9-56e2-4841-908f-fe5ef6d880fe",
        "name": "Louise Ankunding-Keeling",
        "title": "Regional Applications Administrator",
        "address": {
            "street": "76579 Kertzmann Extension",
            "city": "Waterbury",
            "state": "Kentucky",
            "zip": "89896-8525",
            "country": "Bangladesh"
        },
        "avatar": "https://avatars.githubusercontent.com/u/24400124",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ba61326d-a10c-437a-b891-dd71daf01a9b",
        "name": "Jeanette Koelpin-Stanton",
        "title": "Global Response Assistant",
        "address": {
            "street": "69821 Will Harbors",
            "city": "Earneststead",
            "state": "Iowa",
            "zip": "50672",
            "country": "Indonesia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/438.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "22d8f45a-591e-401c-af34-409f47dd6de0",
        "name": "Anita Kuhic",
        "title": "Corporate Interactions Analyst",
        "address": {
            "street": "755 Murray Squares",
            "city": "Torpworth",
            "state": "Georgia",
            "zip": "59935",
            "country": "Curacao"
        },
        "avatar": "https://avatars.githubusercontent.com/u/99226878",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ef951231-edb3-46d9-adfa-1c4ce19d1985",
        "name": "Tiffany Jacobson",
        "title": "Principal Interactions Liaison",
        "address": {
            "street": "64858 Laura Ford",
            "city": "Port Milfordstad",
            "state": "Texas",
            "zip": "08420",
            "country": "Bouvet Island"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/849.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fd17d266-2629-4a29-b28b-1c3fa90c3050",
        "name": "Mr. Daniel Steuber",
        "title": "Investor Marketing Planner",
        "address": {
            "street": "4649 Winifred Mountain",
            "city": "Elkhart",
            "state": "North Carolina",
            "zip": "81544",
            "country": "Bangladesh"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/39.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "278da5ee-d318-4fde-9032-d3de03d066cb",
        "name": "Tony Blanda",
        "title": "Regional Marketing Liaison",
        "address": {
            "street": "58380 Glover Mountain",
            "city": "Lompoc",
            "state": "Utah",
            "zip": "88570",
            "country": "Maldives"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/410.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "121dbddc-2b1c-4f38-a31f-34dbe9cb7564",
        "name": "Jessie Schmidt",
        "title": "Central Paradigm Analyst",
        "address": {
            "street": "297 Jodie Ford",
            "city": "Davisview",
            "state": "Maine",
            "zip": "57722",
            "country": "Papua New Guinea"
        },
        "avatar": "https://avatars.githubusercontent.com/u/45191634",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d157fe9a-c0b6-45d8-8e30-9aa6f69c2bf1",
        "name": "Tiffany Rowe I",
        "title": "Product Configuration Agent",
        "address": {
            "street": "561 O'Connell Neck",
            "city": "Hansencester",
            "state": "Nebraska",
            "zip": "51120",
            "country": "North Macedonia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1050.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0a44ba4d-db38-4416-8130-8d8fd9bce322",
        "name": "Juan Goldner-Ratke",
        "title": "Legacy Usability Engineer",
        "address": {
            "street": "73524 Leland Valleys",
            "city": "Josiestad",
            "state": "Mississippi",
            "zip": "87318",
            "country": "Kazakhstan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/57208984",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "28d41504-3ca6-43e6-a352-ae4401a44b58",
        "name": "Dr. James Howe",
        "title": "Senior Creative Strategist",
        "address": {
            "street": "75847 Diana Creek",
            "city": "Ogden",
            "state": "Oklahoma",
            "zip": "62691-8858",
            "country": "Curacao"
        },
        "avatar": "https://avatars.githubusercontent.com/u/54702514",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "18b808a8-1003-483c-bb72-e1d655c8b8df",
        "name": "Miss Lori Bartell",
        "title": "Internal Creative Officer",
        "address": {
            "street": "747 Reilly Unions",
            "city": "VonRuedenton",
            "state": "Massachusetts",
            "zip": "90324-0874",
            "country": "Dominica"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/850.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d4f000ea-c4b3-40b2-8cba-b25fe22e376b",
        "name": "Miss Kellie Spencer",
        "title": "Internal Solutions Liaison",
        "address": {
            "street": "594 Kessler Mountain",
            "city": "New Reta",
            "state": "Vermont",
            "zip": "21943-1000",
            "country": "Haiti"
        },
        "avatar": "https://avatars.githubusercontent.com/u/17528372",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c735c7a8-5cfd-48d6-8e3d-21ed8381d26b",
        "name": "Jose Dickinson",
        "title": "Principal Integration Orchestrator",
        "address": {
            "street": "79252 Harvey Oval",
            "city": "Ressiechester",
            "state": "New Jersey",
            "zip": "81187",
            "country": "Papua New Guinea"
        },
        "avatar": "https://avatars.githubusercontent.com/u/56013885",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "33551a9c-db55-468f-a874-e1029ba417d7",
        "name": "Audrey Haley",
        "title": "Human Identity Designer",
        "address": {
            "street": "52704 Cole Field",
            "city": "South Kristina",
            "state": "North Dakota",
            "zip": "09137",
            "country": "Uruguay"
        },
        "avatar": "https://avatars.githubusercontent.com/u/48901266",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "602fbd61-e23a-48e4-9238-9121e8c807b3",
        "name": "Ignacio Yost",
        "title": "Legacy Web Administrator",
        "address": {
            "street": "313 Fay Canyon",
            "city": "Abebury",
            "state": "New Jersey",
            "zip": "17521-8310",
            "country": "Zimbabwe"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/791.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8dfa2474-e488-488b-94c5-f24ccd078727",
        "name": "Lewis Ernser",
        "title": "Legacy Solutions Associate",
        "address": {
            "street": "63174 Britney Mill",
            "city": "Stantonboro",
            "state": "Hawaii",
            "zip": "33433-2879",
            "country": "Maldives"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1080.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "075874e3-69e9-4dbe-aabd-24d931b9204a",
        "name": "Ronnie Fahey",
        "title": "Legacy Applications Agent",
        "address": {
            "street": "269 Connelly Cape",
            "city": "Brooksworth",
            "state": "South Dakota",
            "zip": "83651-1144",
            "country": "Nigeria"
        },
        "avatar": "https://avatars.githubusercontent.com/u/26131293",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "07bd7a7a-82f1-4c74-948b-5b86ec984ba4",
        "name": "Dr. Angel Donnelly",
        "title": "Customer Accounts Director",
        "address": {
            "street": "612 Ismael Fields",
            "city": "East Raleigh",
            "state": "Florida",
            "zip": "47629-2489",
            "country": "Norfolk Island"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/940.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0179695e-b779-4539-94af-67735acdc60a",
        "name": "Ellis Abbott",
        "title": "Product Applications Agent",
        "address": {
            "street": "92082 Tracy Fields",
            "city": "Sandyshire",
            "state": "South Carolina",
            "zip": "69318-6306",
            "country": "Kyrgyz Republic"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1012.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6a0c8493-dea6-4b0d-ac99-1e0bdcf37e06",
        "name": "Alex Bruen",
        "title": "Internal Markets Coordinator",
        "address": {
            "street": "302 Larson Track",
            "city": "Palmaburgh",
            "state": "Minnesota",
            "zip": "03953",
            "country": "Italy"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/136.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b9eec3df-373c-46a0-a657-3721d18e05ce",
        "name": "Shelly Quigley DDS",
        "title": "Internal Mobility Strategist",
        "address": {
            "street": "85197 Duncan Route",
            "city": "Suzannefort",
            "state": "New York",
            "zip": "36295-4858",
            "country": "Slovakia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/444.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7d45359c-21f9-499b-8910-0c9c7cc1097b",
        "name": "Lewis O'Kon",
        "title": "Investor Response Agent",
        "address": {
            "street": "440 Amaya Road",
            "city": "Laredo",
            "state": "Florida",
            "zip": "36135",
            "country": "Latvia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/568.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7c6a703c-3daa-44b3-a2cf-4ac18060832c",
        "name": "Jay O'Reilly",
        "title": "Senior Data Coordinator",
        "address": {
            "street": "3898 Joey Bypass",
            "city": "Ratkefield",
            "state": "Wyoming",
            "zip": "68528-7990",
            "country": "Solomon Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/61527909",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "858e5780-67c6-48e2-81b6-c3adeeb496dd",
        "name": "Mr. Bradley Will",
        "title": "Regional Assurance Officer",
        "address": {
            "street": "65422 Stokes Burg",
            "city": "Harmonyside",
            "state": "South Dakota",
            "zip": "17362",
            "country": "Tajikistan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/31216477",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "100a115d-d766-4a18-9326-dd7c3d447cf5",
        "name": "Mr. Ken Rutherford",
        "title": "Chief Optimization Developer",
        "address": {
            "street": "1809 Pedro Pass",
            "city": "East Laruechester",
            "state": "New Hampshire",
            "zip": "81504",
            "country": "Christmas Island"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/654.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "674efa2a-146a-4ae7-9636-983a8fc99397",
        "name": "Nina Williamson",
        "title": "Global Applications Assistant",
        "address": {
            "street": "51758 Caesar Shoals",
            "city": "Faustinoburgh",
            "state": "Nebraska",
            "zip": "29769-4902",
            "country": "Angola"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/46.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "54a2f682-8e6c-4103-b7fb-93ad00512234",
        "name": "Yolanda Paucek",
        "title": "Chief Quality Producer",
        "address": {
            "street": "8884 O'Conner Pass",
            "city": "Denesikland",
            "state": "Louisiana",
            "zip": "62152-8187",
            "country": "Belarus"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/546.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "54df5fc3-b222-4e67-ad6e-2c99c35e187d",
        "name": "Seth Hammes II",
        "title": "Product Markets Agent",
        "address": {
            "street": "7363 Helga Wall",
            "city": "Biankaton",
            "state": "Vermont",
            "zip": "26158",
            "country": "Kuwait"
        },
        "avatar": "https://avatars.githubusercontent.com/u/31204152",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "67849ac6-052b-44ab-af74-8f5f3e59d145",
        "name": "Joann Champlin",
        "title": "Corporate Accountability Supervisor",
        "address": {
            "street": "674 Lucas Keys",
            "city": "New Alfredoborough",
            "state": "Maryland",
            "zip": "90139-3697",
            "country": "Tuvalu"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/970.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "20692249-3ba2-47bb-9e81-191d7b0abe6e",
        "name": "Sheila Ledner",
        "title": "International Accounts Producer",
        "address": {
            "street": "292 Maggio Cape",
            "city": "Port Ibrahimport",
            "state": "Massachusetts",
            "zip": "32063-0930",
            "country": "Iraq"
        },
        "avatar": "https://avatars.githubusercontent.com/u/97769683",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ea817b66-4ec3-417e-8e6a-a0221961e8d7",
        "name": "Hilda Huel",
        "title": "Dynamic Group Associate",
        "address": {
            "street": "3313 Bosco Street",
            "city": "Aufderharstead",
            "state": "North Carolina",
            "zip": "20506",
            "country": "American Samoa"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/212.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3fd9be58-c458-4fee-b596-edf53acbd336",
        "name": "Miss Leslie Morar",
        "title": "International Group Manager",
        "address": {
            "street": "291 Dell Route",
            "city": "Port Evalynshire",
            "state": "Colorado",
            "zip": "65943-2325",
            "country": "Finland"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/942.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c1a83dbb-503e-404c-bd0a-5c6b09ec8be8",
        "name": "Phil Jacobi",
        "title": "Human Intranet Administrator",
        "address": {
            "street": "4487 Tremblay Avenue",
            "city": "Caylaberg",
            "state": "Indiana",
            "zip": "41182",
            "country": "French Southern Territories"
        },
        "avatar": "https://avatars.githubusercontent.com/u/33199808",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "279b8b8a-8734-439e-b969-d6959b6a4c26",
        "name": "Marion McGlynn",
        "title": "Future Factors Administrator",
        "address": {
            "street": "50865 Towne Club",
            "city": "West Kelsi",
            "state": "Wyoming",
            "zip": "26068-5998",
            "country": "Benin"
        },
        "avatar": "https://avatars.githubusercontent.com/u/18510093",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "71192edb-ae11-45b4-94a8-de1ad8286ba6",
        "name": "Lula Zieme",
        "title": "Central Metrics Orchestrator",
        "address": {
            "street": "3520 Kunde Curve",
            "city": "Spring Valley",
            "state": "Michigan",
            "zip": "69249",
            "country": "Trinidad and Tobago"
        },
        "avatar": "https://avatars.githubusercontent.com/u/49644308",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9a263ac2-e6b4-41b1-95bc-9256a181d4f7",
        "name": "Vicki Graham-Grady",
        "title": "Global Quality Technician",
        "address": {
            "street": "21588 Shyann Lane",
            "city": "Arcadia",
            "state": "South Dakota",
            "zip": "38599-8603",
            "country": "Croatia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/472.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "344c0e13-a64f-4690-a480-abce4936e7d0",
        "name": "Dianne Barrows",
        "title": "Central Program Analyst",
        "address": {
            "street": "3948 Orlando Glen",
            "city": "North Chase",
            "state": "Oregon",
            "zip": "81775",
            "country": "Kenya"
        },
        "avatar": "https://avatars.githubusercontent.com/u/62072515",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4980c388-39a2-4adb-b817-ff9e47a59f7f",
        "name": "Eleanor Koss",
        "title": "Human Response Director",
        "address": {
            "street": "2226 Dickens Island",
            "city": "Robertsbury",
            "state": "New York",
            "zip": "32282",
            "country": "Moldova"
        },
        "avatar": "https://avatars.githubusercontent.com/u/72533610",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e142a00c-6d88-473c-85c7-b532d3fba893",
        "name": "Geneva Kuhn",
        "title": "District Response Supervisor",
        "address": {
            "street": "5850 Nolan Point",
            "city": "North Inesstead",
            "state": "Louisiana",
            "zip": "30502",
            "country": "Monaco"
        },
        "avatar": "https://avatars.githubusercontent.com/u/95473709",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1abdffe3-d9d2-47a3-9d08-041eb2a81ac5",
        "name": "Rudy Williamson",
        "title": "Forward Mobility Representative",
        "address": {
            "street": "6982 Lavonne Knolls",
            "city": "North Rosettafort",
            "state": "Virginia",
            "zip": "31575",
            "country": "Austria"
        },
        "avatar": "https://avatars.githubusercontent.com/u/31246502",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5f60da9a-9176-464a-851f-5471f2b11dcb",
        "name": "Gilberto Bartoletti",
        "title": "Corporate Intranet Engineer",
        "address": {
            "street": "969 Runolfsdottir Villages",
            "city": "O'Haraview",
            "state": "Vermont",
            "zip": "65085",
            "country": "Lebanon"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1009.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "99b31f76-71ab-448c-8e66-389df1e1a6c1",
        "name": "Candice Schultz",
        "title": "Product Brand Coordinator",
        "address": {
            "street": "31264 Libbie Estates",
            "city": "South Chance",
            "state": "Connecticut",
            "zip": "68007",
            "country": "Martinique"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/668.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2a1d0dc1-bf43-4563-9837-c30393bf4fe3",
        "name": "Esther Mertz",
        "title": "Product Operations Strategist",
        "address": {
            "street": "89312 Hansen Roads",
            "city": "Sioux Falls",
            "state": "Maryland",
            "zip": "18046",
            "country": "Palau"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/909.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7017b795-7fd4-4a79-acc3-eb7b8352f40f",
        "name": "Maria Sauer",
        "title": "Dynamic Research Administrator",
        "address": {
            "street": "9017 Rebekah Mews",
            "city": "Hammond",
            "state": "Wyoming",
            "zip": "21752-9243",
            "country": "Chad"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/869.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b2837a13-1524-46da-8543-328f5511aab0",
        "name": "Karla Marquardt",
        "title": "Product Research Specialist",
        "address": {
            "street": "747 Jacobson Walk",
            "city": "Marvinville",
            "state": "Pennsylvania",
            "zip": "73891",
            "country": "Chad"
        },
        "avatar": "https://avatars.githubusercontent.com/u/21342830",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ec94d6a5-89f0-4198-aa81-34ea63cce4de",
        "name": "Tyrone Kuhlman",
        "title": "Dynamic Brand Supervisor",
        "address": {
            "street": "9691 Tillman Forge",
            "city": "East Willis",
            "state": "Washington",
            "zip": "79650-9280",
            "country": "Peru"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/568.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d75fa64d-c773-414c-b13f-53eb7c761dc9",
        "name": "Rene Bartoletti",
        "title": "Senior Mobility Consultant",
        "address": {
            "street": "872 Eldora Brook",
            "city": "Lake Denisfield",
            "state": "Massachusetts",
            "zip": "66000-0452",
            "country": "Saint Barthelemy"
        },
        "avatar": "https://avatars.githubusercontent.com/u/22984385",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0fef4c4f-c222-41f8-a653-8af0cbe42de7",
        "name": "Dallas Fadel",
        "title": "Dynamic Security Manager",
        "address": {
            "street": "230 Kub Wells",
            "city": "Kulasport",
            "state": "Georgia",
            "zip": "38337-6550",
            "country": "Kyrgyz Republic"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/347.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f1a56d53-0eb5-4599-af14-11d43b9cd1b3",
        "name": "Enrique Kuhlman",
        "title": "Investor Solutions Consultant",
        "address": {
            "street": "584 Nya Pike",
            "city": "East Ansel",
            "state": "New Mexico",
            "zip": "87049-2272",
            "country": "France"
        },
        "avatar": "https://avatars.githubusercontent.com/u/67515364",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "648caf52-d6c9-4c0c-85b7-026bf4a92235",
        "name": "Lucy Lemke",
        "title": "Future Assurance Administrator",
        "address": {
            "street": "466 Dejuan Knoll",
            "city": "Port Torey",
            "state": "Maine",
            "zip": "56718",
            "country": "Saint Martin"
        },
        "avatar": "https://avatars.githubusercontent.com/u/64228902",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "860a8a8f-f71e-4033-944e-828cc269bd9e",
        "name": "Alonzo Harber",
        "title": "Future Security Engineer",
        "address": {
            "street": "5032 Arely View",
            "city": "Tracyville",
            "state": "Tennessee",
            "zip": "25960-3160",
            "country": "Guinea"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/273.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ec7da8ac-6d83-4132-a490-aeb9f117cc15",
        "name": "Travis Treutel",
        "title": "Chief Identity Planner",
        "address": {
            "street": "86136 Eldora Lights",
            "city": "West Allis",
            "state": "Indiana",
            "zip": "80221",
            "country": "Trinidad and Tobago"
        },
        "avatar": "https://avatars.githubusercontent.com/u/8614507",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8fad6d26-cbf8-4086-94e0-f258b70eaf79",
        "name": "Terrance Streich",
        "title": "Product Security Coordinator",
        "address": {
            "street": "8430 Elian Port",
            "city": "Andersonfield",
            "state": "Ohio",
            "zip": "41774-5971",
            "country": "Norfolk Island"
        },
        "avatar": "https://avatars.githubusercontent.com/u/91535201",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a91a0593-cba1-43ea-8643-03bc3ef7f063",
        "name": "Loretta Fadel",
        "title": "Internal Operations Developer",
        "address": {
            "street": "85349 Corbin Flats",
            "city": "East Eulalia",
            "state": "Idaho",
            "zip": "21581",
            "country": "Morocco"
        },
        "avatar": "https://avatars.githubusercontent.com/u/92886915",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e594832f-2503-4b0d-b68d-e83148a50e35",
        "name": "Vickie Schmeler V",
        "title": "Central Infrastructure Developer",
        "address": {
            "street": "26531 Nolan Ports",
            "city": "Timmytown",
            "state": "Indiana",
            "zip": "57268-1170",
            "country": "Chile"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/852.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "dfa951dd-78e8-4490-8ad2-f67d1a7c0d94",
        "name": "Patrick Hammes",
        "title": "Corporate Paradigm Strategist",
        "address": {
            "street": "15723 Zboncak Ranch",
            "city": "Pittsburgh",
            "state": "Nebraska",
            "zip": "24085-2899",
            "country": "Ireland"
        },
        "avatar": "https://avatars.githubusercontent.com/u/42281688",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "799ff583-d754-4d2f-813f-2856653a24ec",
        "name": "Sabrina Spinka Jr.",
        "title": "Customer Tactics Technician",
        "address": {
            "street": "12280 Francisca Mill",
            "city": "Konopelskibury",
            "state": "Michigan",
            "zip": "54146-3486",
            "country": "Spain"
        },
        "avatar": "https://avatars.githubusercontent.com/u/90221409",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4354da81-eda3-43ea-9132-edb253c27b64",
        "name": "Dr. Doyle Larson",
        "title": "Investor Communications Supervisor",
        "address": {
            "street": "7007 Kling Motorway",
            "city": "New Kyler",
            "state": "Kansas",
            "zip": "32927",
            "country": "Croatia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/495.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0170494a-423f-4776-9809-6ded32890f6c",
        "name": "Jeanette Mraz",
        "title": "Regional Infrastructure Associate",
        "address": {
            "street": "392 Bell Well",
            "city": "Port Lewton",
            "state": "South Carolina",
            "zip": "77185",
            "country": "Bulgaria"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/531.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "877c65e0-bba3-438c-a2b3-4f980db0105c",
        "name": "Kelly Littel",
        "title": "Product Infrastructure Designer",
        "address": {
            "street": "8821 Hahn Terrace",
            "city": "Brendanview",
            "state": "Rhode Island",
            "zip": "52303",
            "country": "Heard Island and McDonald Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/55136454",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5ea12679-cd98-4527-9044-64f0e2271e22",
        "name": "Matt Crist",
        "title": "Human Research Consultant",
        "address": {
            "street": "941 Rhiannon Cliffs",
            "city": "Kayleefurt",
            "state": "Nebraska",
            "zip": "87431-5732",
            "country": "Hong Kong"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/437.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ab9d5bc2-d968-4d7a-95e0-13bdaf2bf9c0",
        "name": "Anna Heathcote",
        "title": "Internal Accounts Orchestrator",
        "address": {
            "street": "1105 Kassulke Plaza",
            "city": "Hollieville",
            "state": "Alabama",
            "zip": "41633",
            "country": "Democratic Republic of the Congo"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/544.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "669c34d2-4c2c-4171-ac23-a0ff953953a4",
        "name": "Elmer O'Hara DDS",
        "title": "Lead Usability Supervisor",
        "address": {
            "street": "531 Keshawn Forge",
            "city": "East Norene",
            "state": "Oregon",
            "zip": "51840-7569",
            "country": "French Guiana"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1069.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1faaede9-55c9-452e-b4f2-68ad4feb9262",
        "name": "Ms. Brandi D'Amore",
        "title": "Forward Configuration Developer",
        "address": {
            "street": "91096 Cassandra Fall",
            "city": "South Rigobertofurt",
            "state": "Colorado",
            "zip": "62940",
            "country": "Gibraltar"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/409.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2b375bb7-e300-471b-86ec-3c947a0fded1",
        "name": "Julia Schmeler",
        "title": "Regional Web Officer",
        "address": {
            "street": "16517 Kris Freeway",
            "city": "Stellacester",
            "state": "North Dakota",
            "zip": "98439-2333",
            "country": "Democratic Republic of the Congo"
        },
        "avatar": "https://avatars.githubusercontent.com/u/39041353",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b1b05672-2aec-429b-b251-b65484546bb0",
        "name": "Ms. Betty Fahey",
        "title": "Legacy Assurance Officer",
        "address": {
            "street": "7919 Ayden Haven",
            "city": "Johnsburgh",
            "state": "Wisconsin",
            "zip": "33363-9258",
            "country": "Cayman Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/79296845",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "25c110a6-c0b0-4ddf-9614-2b8307216df0",
        "name": "Susie Moore",
        "title": "Principal Web Assistant",
        "address": {
            "street": "1341 Heidenreich Orchard",
            "city": "Folsom",
            "state": "West Virginia",
            "zip": "37102",
            "country": "Curacao"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1154.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3fe9a363-a74b-43d5-8928-c69562d40aa7",
        "name": "Julie Terry",
        "title": "Chief Program Administrator",
        "address": {
            "street": "91207 Kristy Manor",
            "city": "Hicksville",
            "state": "Nebraska",
            "zip": "05004-5170",
            "country": "Bolivia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/295.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0d12cf27-a67a-434a-b55e-b7c11f744e1c",
        "name": "Rhonda Dickens V",
        "title": "Corporate Applications Assistant",
        "address": {
            "street": "750 Gulgowski Estates",
            "city": "Beierton",
            "state": "Arizona",
            "zip": "91267",
            "country": "Bolivia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/166.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b4daf4fe-9dc3-47db-94cd-da4e55c0c26f",
        "name": "Jackie Herman",
        "title": "Global Communications Strategist",
        "address": {
            "street": "3143 Schmidt Freeway",
            "city": "New Ritaburgh",
            "state": "Alabama",
            "zip": "28913-8720",
            "country": "Equatorial Guinea"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/979.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d130cf6d-f7c5-4672-9e12-d38fadb352cf",
        "name": "Dianne Hudson",
        "title": "Human Operations Strategist",
        "address": {
            "street": "706 Roel Garden",
            "city": "Independence",
            "state": "Virginia",
            "zip": "94543",
            "country": "Uruguay"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1103.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ff022a2f-95cd-4d18-93a2-52ba4c565770",
        "name": "Renee Kuvalis",
        "title": "Principal Group Representative",
        "address": {
            "street": "3036 Bailey Wells",
            "city": "Alaynaburgh",
            "state": "Idaho",
            "zip": "94857-5316",
            "country": "Guatemala"
        },
        "avatar": "https://avatars.githubusercontent.com/u/98599732",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c68ac14e-30ad-4372-b95b-7e8b5c29ddbf",
        "name": "Ms. Misty Weissnat IV",
        "title": "Internal Assurance Associate",
        "address": {
            "street": "660 Jermain Oval",
            "city": "North Port",
            "state": "Maine",
            "zip": "44573-5112",
            "country": "Sudan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/4552464",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "275012e9-3df2-4d09-8330-7211961a299e",
        "name": "Joy Hegmann III",
        "title": "Chief Optimization Consultant",
        "address": {
            "street": "96436 Gislason Extensions",
            "city": "Lynchcester",
            "state": "Kansas",
            "zip": "27378",
            "country": "Lesotho"
        },
        "avatar": "https://avatars.githubusercontent.com/u/7062022",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6d66083a-d66b-4a7d-aa4f-e47fa72a2dba",
        "name": "Stuart Turcotte",
        "title": "Direct Configuration Agent",
        "address": {
            "street": "25398 Aidan Plains",
            "city": "Hegmannbury",
            "state": "South Carolina",
            "zip": "97455",
            "country": "China"
        },
        "avatar": "https://avatars.githubusercontent.com/u/6627303",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9f8c6372-1c94-4f68-bbdc-84e13e9039c5",
        "name": "Brad Howe",
        "title": "Internal Research Producer",
        "address": {
            "street": "26262 Riley Land",
            "city": "Flower Mound",
            "state": "South Carolina",
            "zip": "45064-9276",
            "country": "Sudan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1176.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7cd80b97-1a2e-4a34-95c5-0d5cd5f55df9",
        "name": "Kevin Hegmann",
        "title": "Investor Metrics Developer",
        "address": {
            "street": "6499 Hoeger Mill",
            "city": "New Timmothy",
            "state": "Alabama",
            "zip": "98391-1763",
            "country": "Saint Barthelemy"
        },
        "avatar": "https://avatars.githubusercontent.com/u/65687083",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "aa9d6013-2d32-4b22-892d-d2ccc90353ed",
        "name": "Antonia Wilderman",
        "title": "Corporate Integration Strategist",
        "address": {
            "street": "9300 Porter View",
            "city": "Woodbury",
            "state": "Florida",
            "zip": "18195",
            "country": "Kyrgyz Republic"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/721.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2dc606ec-50f5-423f-8fe5-32c29946d259",
        "name": "Krista Price V",
        "title": "Senior Functionality Associate",
        "address": {
            "street": "828 Elsa Forge",
            "city": "Biloxi",
            "state": "Montana",
            "zip": "55985-9164",
            "country": "Wallis and Futuna"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1132.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "84ec3ea9-db14-4cb5-ac8e-1f527ac59690",
        "name": "Mr. Mitchell Hettinger",
        "title": "Dynamic Metrics Developer",
        "address": {
            "street": "13653 Conn Bypass",
            "city": "Fort Johathanborough",
            "state": "Connecticut",
            "zip": "11391-3087",
            "country": "Guernsey"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1179.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "320df072-1617-4c21-a0b1-77d005ac6dd0",
        "name": "Camille Schultz MD",
        "title": "Corporate Tactics Orchestrator",
        "address": {
            "street": "701 Howe Unions",
            "city": "New Jennyfer",
            "state": "Nevada",
            "zip": "57361",
            "country": "Zimbabwe"
        },
        "avatar": "https://avatars.githubusercontent.com/u/15765164",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "88d4bcaa-d56e-4e37-9c60-08dbef542e93",
        "name": "Preston Senger",
        "title": "International Identity Representative",
        "address": {
            "street": "73857 Kessler Station",
            "city": "East Lonnie",
            "state": "Louisiana",
            "zip": "26243",
            "country": "Mali"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1041.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e48bc330-805d-488b-bd88-61c826a8218c",
        "name": "Derek Schuppe III",
        "title": "Human Integration Assistant",
        "address": {
            "street": "6480 Kris Valleys",
            "city": "Hammesfurt",
            "state": "Massachusetts",
            "zip": "49912-3812",
            "country": "United States of America"
        },
        "avatar": "https://avatars.githubusercontent.com/u/7429398",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7adc6bb0-3210-4d79-94fc-1210b6e4fe2e",
        "name": "Jerome Conroy",
        "title": "Regional Usability Architect",
        "address": {
            "street": "344 Carmine Mall",
            "city": "Zulaufmouth",
            "state": "Georgia",
            "zip": "51973",
            "country": "Spain"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/111.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "48c91aee-5bf1-4478-bb09-5b810e9d0c9b",
        "name": "Lillie Abbott",
        "title": "Investor Web Designer",
        "address": {
            "street": "326 Rosenbaum Cliffs",
            "city": "Cecilworth",
            "state": "New Jersey",
            "zip": "86030-0557",
            "country": "Mozambique"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1038.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "13b76066-49a0-412d-bb43-0cdf8f247936",
        "name": "Dr. Dean Kohler",
        "title": "Investor Response Executive",
        "address": {
            "street": "3174 Harris Plaza",
            "city": "Georgianashire",
            "state": "Delaware",
            "zip": "03228-4313",
            "country": "Kazakhstan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/252.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "bae46404-494b-4220-b39f-19112d31da93",
        "name": "Billy Greenfelder-Schumm III",
        "title": "District Directives Analyst",
        "address": {
            "street": "5348 Lou Light",
            "city": "West Colinland",
            "state": "Vermont",
            "zip": "99762-0104",
            "country": "Nauru"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/138.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "92860806-045f-4a6a-a854-139db188aaee",
        "name": "Carl Reilly",
        "title": "Future Assurance Representative",
        "address": {
            "street": "82732 Summer Lodge",
            "city": "West Bennyhaven",
            "state": "Missouri",
            "zip": "50215",
            "country": "Marshall Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/15691830",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b035917c-c70a-44f3-a74e-e40053a1d05a",
        "name": "Annette Hilpert",
        "title": "National Directives Director",
        "address": {
            "street": "1657 Jolie Gardens",
            "city": "East Meaganburgh",
            "state": "Florida",
            "zip": "29688",
            "country": "Thailand"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/794.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b00a4711-ca92-404e-ab3f-dd2fb901c7a3",
        "name": "Julie Kuhlman",
        "title": "International Brand Consultant",
        "address": {
            "street": "548 Jackson Freeway",
            "city": "Delphashire",
            "state": "Rhode Island",
            "zip": "17618",
            "country": "Haiti"
        },
        "avatar": "https://avatars.githubusercontent.com/u/9377193",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2f464b0b-efad-4cc3-bf4b-441040d3a0ad",
        "name": "Amos Schultz",
        "title": "District Branding Consultant",
        "address": {
            "street": "973 Mraz Overpass",
            "city": "Ellicott City",
            "state": "Hawaii",
            "zip": "80853-3170",
            "country": "Botswana"
        },
        "avatar": "https://avatars.githubusercontent.com/u/52253729",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4e71d449-3e5d-4d33-8acf-04b1d8de7fb1",
        "name": "Kent Hamill II",
        "title": "National Paradigm Coordinator",
        "address": {
            "street": "56710 Parisian Radial",
            "city": "Fort Wiltonview",
            "state": "Pennsylvania",
            "zip": "80054-9330",
            "country": "Timor-Leste"
        },
        "avatar": "https://avatars.githubusercontent.com/u/29723797",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0454686c-8af2-4b3f-81c2-706cb4f45c6a",
        "name": "Rufus Schultz",
        "title": "National Brand Coordinator",
        "address": {
            "street": "98569 Alexandrea Highway",
            "city": "Wolffstead",
            "state": "Montana",
            "zip": "26813-0723",
            "country": "Jersey"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/403.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "40fdf2da-e0a5-4d53-ae3e-b00109db9c6a",
        "name": "Kimberly Kautzer",
        "title": "Global Response Analyst",
        "address": {
            "street": "843 Mikayla Pines",
            "city": "Lake Christ",
            "state": "Alabama",
            "zip": "31368",
            "country": "Greenland"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/81.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "964e47c7-2910-4a18-94c8-4c7223edbee6",
        "name": "Larry Conroy",
        "title": "Legacy Quality Strategist",
        "address": {
            "street": "65533 Johnston Roads",
            "city": "Cristalbury",
            "state": "Michigan",
            "zip": "43740-3232",
            "country": "Montserrat"
        },
        "avatar": "https://avatars.githubusercontent.com/u/61406011",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "df6d19ab-f1ab-4d80-88d4-4e5decf040c4",
        "name": "Andrea Dicki",
        "title": "Global Communications Associate",
        "address": {
            "street": "79113 Al Neck",
            "city": "Haleyview",
            "state": "Wisconsin",
            "zip": "07753",
            "country": "Guinea"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/702.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "20133a13-c83a-48bb-97ea-4adfeeb93cab",
        "name": "Lorraine Kunde",
        "title": "National Markets Developer",
        "address": {
            "street": "802 Mayert Locks",
            "city": "Jonesboro",
            "state": "Texas",
            "zip": "83836",
            "country": "Hungary"
        },
        "avatar": "https://avatars.githubusercontent.com/u/26279241",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "584cdb6e-4af7-447a-82a9-716ccb6126f7",
        "name": "Cathy Erdman",
        "title": "Future Response Associate",
        "address": {
            "street": "205 Mittie Harbor",
            "city": "Jarredberg",
            "state": "Delaware",
            "zip": "37752",
            "country": "Belarus"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/589.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8520e797-898d-42e1-ad57-ed6d1eeb74ef",
        "name": "Constance Marvin",
        "title": "Human Assurance Agent",
        "address": {
            "street": "913 Schulist Summit",
            "city": "St. Peters",
            "state": "Hawaii",
            "zip": "32825-6539",
            "country": "Saint Barthelemy"
        },
        "avatar": "https://avatars.githubusercontent.com/u/41627578",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f18d2f68-f89a-43a1-ba34-f978422dbf93",
        "name": "Kyle Schmidt",
        "title": "Customer Applications Representative",
        "address": {
            "street": "40812 Mac Tunnel",
            "city": "Crawfordstad",
            "state": "Rhode Island",
            "zip": "37302-5283",
            "country": "Russian Federation"
        },
        "avatar": "https://avatars.githubusercontent.com/u/77055127",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "bb783121-e81a-45f6-ba18-40fc4cea26ce",
        "name": "Martin Kovacek",
        "title": "District Solutions Developer",
        "address": {
            "street": "12129 Frank Gateway",
            "city": "Buckridgefurt",
            "state": "Mississippi",
            "zip": "30601",
            "country": "Mexico"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/303.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c50fabae-8f90-49ff-a0f9-dbcf08bf2853",
        "name": "Lola Ortiz",
        "title": "Internal Solutions Engineer",
        "address": {
            "street": "2991 Gladyce Way",
            "city": "New Braedenstad",
            "state": "Tennessee",
            "zip": "90520-0094",
            "country": "Guam"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1150.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "22f2a8bb-c7e8-400b-8ce7-37f1e3881781",
        "name": "Shaun Kuvalis",
        "title": "Legacy Functionality Liaison",
        "address": {
            "street": "320 Lexus Place",
            "city": "Lake Adolph",
            "state": "Kentucky",
            "zip": "12162",
            "country": "Sudan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/77327260",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "52249cb7-d84b-47b7-bcc7-5d127468c578",
        "name": "Van Macejkovic",
        "title": "Regional Communications Executive",
        "address": {
            "street": "67393 Susanna Cape",
            "city": "Hermistonchester",
            "state": "Mississippi",
            "zip": "07008-3248",
            "country": "Kiribati"
        },
        "avatar": "https://avatars.githubusercontent.com/u/11969102",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c99dbe20-6ac9-4a1e-8fc1-4aee1cd594e1",
        "name": "Cornelius Nikolaus",
        "title": "Internal Configuration Engineer",
        "address": {
            "street": "12779 Earl Valley",
            "city": "North Germanland",
            "state": "Kentucky",
            "zip": "40118",
            "country": "India"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/30.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "18e91869-e244-43ec-98fc-193a1a9b367a",
        "name": "Ian Rau",
        "title": "Dynamic Implementation Designer",
        "address": {
            "street": "93654 Vito Forges",
            "city": "St. Cloud",
            "state": "West Virginia",
            "zip": "31346",
            "country": "Namibia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/117.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f4acd308-6fb5-40bf-a588-cca81d1cb847",
        "name": "Seth Wilderman",
        "title": "District Tactics Architect",
        "address": {
            "street": "57768 Ollie Fords",
            "city": "Port Margarita",
            "state": "Maryland",
            "zip": "68570-4413",
            "country": "Malawi"
        },
        "avatar": "https://avatars.githubusercontent.com/u/78106102",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "922b7215-98fd-42f5-9414-0d8b05f21864",
        "name": "Lula Lemke-Kemmer",
        "title": "Human Directives Executive",
        "address": {
            "street": "6704 Cronin Rapids",
            "city": "Schillercester",
            "state": "Indiana",
            "zip": "77016-2613",
            "country": "South Georgia and the South Sandwich Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/423.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "90fa348d-0a2f-4551-a31b-b1359cc7fbd8",
        "name": "Joanne Wehner",
        "title": "National Applications Consultant",
        "address": {
            "street": "40960 Veda Key",
            "city": "Swiftboro",
            "state": "Georgia",
            "zip": "20156",
            "country": "British Indian Ocean Territory (Chagos Archipelago)"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/485.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7612b14c-e497-43ec-95e3-d4b3009a03a7",
        "name": "Salvatore Conn",
        "title": "Global Creative Representative",
        "address": {
            "street": "42854 Smith Manor",
            "city": "East Millerfort",
            "state": "Utah",
            "zip": "28677",
            "country": "Luxembourg"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1074.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "cc850496-991f-4029-a5c2-4cd4473ed160",
        "name": "Nelson Keeling",
        "title": "Future Implementation Orchestrator",
        "address": {
            "street": "228 Beth Expressway",
            "city": "Rogahnboro",
            "state": "Colorado",
            "zip": "22387",
            "country": "Cook Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/80717868",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6c502d13-70f0-4577-8c53-c21573c094cc",
        "name": "Mr. Anthony Ryan",
        "title": "Lead Accounts Officer",
        "address": {
            "street": "44009 Torp Manors",
            "city": "Lake Osbaldoworth",
            "state": "Tennessee",
            "zip": "24269-5638",
            "country": "Reunion"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/607.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "985a8f80-9816-42b7-a601-697ad98b8bb1",
        "name": "Darryl Wilderman",
        "title": "Human Implementation Executive",
        "address": {
            "street": "733 Tracey Pines",
            "city": "Bradland",
            "state": "South Dakota",
            "zip": "56094-8541",
            "country": "Marshall Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/477.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f8a82046-91b9-4bc8-953e-0e040b5be60f",
        "name": "Mrs. Celia Klocko PhD",
        "title": "District Integration Consultant",
        "address": {
            "street": "6646 Etha View",
            "city": "West Jaycee",
            "state": "Texas",
            "zip": "74773-2316",
            "country": "Antarctica"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/936.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9f4e86eb-c428-4450-8f69-ca35c32ebfe5",
        "name": "Noel Becker",
        "title": "Dynamic Marketing Executive",
        "address": {
            "street": "3798 Conroy Bridge",
            "city": "West Nayeli",
            "state": "South Dakota",
            "zip": "05346-2156",
            "country": "El Salvador"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/680.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fbd87d5c-dc97-42e1-a398-5032113b5a55",
        "name": "Gloria Schmitt",
        "title": "District Markets Planner",
        "address": {
            "street": "63797 Jacobson Circle",
            "city": "Charlotte",
            "state": "Tennessee",
            "zip": "88555",
            "country": "Madagascar"
        },
        "avatar": "https://avatars.githubusercontent.com/u/74404970",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ffadfd93-6a63-40c4-b1a7-be5e9b00e93b",
        "name": "Lewis Bayer-Kuhn",
        "title": "Forward Division Administrator",
        "address": {
            "street": "5189 Upton Throughway",
            "city": "Cape Coral",
            "state": "Wisconsin",
            "zip": "22711",
            "country": "Palau"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/970.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b9e87181-a616-478a-ab52-a99fd0006903",
        "name": "Marcella Blick IV",
        "title": "Investor Usability Developer",
        "address": {
            "street": "9046 Reichel Points",
            "city": "Fort Clemens",
            "state": "New Jersey",
            "zip": "48742",
            "country": "Israel"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/773.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "84f460f3-41b9-4786-b70d-51906ad9a41c",
        "name": "Andy Rippin",
        "title": "Dynamic Directives Engineer",
        "address": {
            "street": "36283 Clare Land",
            "city": "West Jodie",
            "state": "Massachusetts",
            "zip": "75140",
            "country": "Western Sahara"
        },
        "avatar": "https://avatars.githubusercontent.com/u/28037470",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b8b7a422-788b-422c-9e0e-70f0e6b82460",
        "name": "Dr. Mike Bashirian Jr.",
        "title": "Internal Brand Architect",
        "address": {
            "street": "56935 Stamm Court",
            "city": "Haverhill",
            "state": "California",
            "zip": "21196-9224",
            "country": "Lao People's Democratic Republic"
        },
        "avatar": "https://avatars.githubusercontent.com/u/82586263",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5b80328c-25e6-42c6-981f-23167739238e",
        "name": "Katherine Runolfsson",
        "title": "Customer Infrastructure Developer",
        "address": {
            "street": "126 Stiedemann Parkways",
            "city": "North Sabrynafort",
            "state": "Minnesota",
            "zip": "93184-8164",
            "country": "United Kingdom"
        },
        "avatar": "https://avatars.githubusercontent.com/u/74006405",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c750fae4-cd8f-414e-bd10-7ef1a9ac753d",
        "name": "Irving Kertzmann",
        "title": "Global Configuration Assistant",
        "address": {
            "street": "508 Malcolm Flats",
            "city": "Kokomo",
            "state": "Montana",
            "zip": "68836-0578",
            "country": "Holy See (Vatican City State)"
        },
        "avatar": "https://avatars.githubusercontent.com/u/4921443",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "da97fe41-9159-40c4-b06c-29e246f2b6ee",
        "name": "Heidi Ankunding",
        "title": "District Communications Administrator",
        "address": {
            "street": "443 Lueilwitz Forest",
            "city": "Fort Heidicester",
            "state": "Alaska",
            "zip": "52190",
            "country": "Heard Island and McDonald Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/13965722",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "94fda155-6d5e-44ff-bb45-746fe8872a94",
        "name": "Emmett Abshire",
        "title": "Global Data Orchestrator",
        "address": {
            "street": "4596 Emil Unions",
            "city": "East Malvina",
            "state": "West Virginia",
            "zip": "46009-6130",
            "country": "New Caledonia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/4084442",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "21511098-3cb3-49a2-b5f4-76c864bb3f5f",
        "name": "Curtis Gorczany",
        "title": "Chief Applications Consultant",
        "address": {
            "street": "8693 Adolphus Wall",
            "city": "Brakusfield",
            "state": "Michigan",
            "zip": "74694",
            "country": "San Marino"
        },
        "avatar": "https://avatars.githubusercontent.com/u/47064403",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a29ebf25-12fb-467c-8765-506f9f9052aa",
        "name": "Woodrow Lockman",
        "title": "National Group Officer",
        "address": {
            "street": "62890 Funk Unions",
            "city": "North Arden",
            "state": "Florida",
            "zip": "54663",
            "country": "Syrian Arab Republic"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/276.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ad6b63b4-661a-4542-a5d9-5d85aed55211",
        "name": "Roberto Wintheiser V",
        "title": "Forward Interactions Consultant",
        "address": {
            "street": "88738 Effertz Ridges",
            "city": "Walshhaven",
            "state": "Indiana",
            "zip": "17641",
            "country": "Latvia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/65793501",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "749507f6-ffaa-492a-9560-2ed105a91cb8",
        "name": "Wilfred Hegmann Sr.",
        "title": "Principal Factors Specialist",
        "address": {
            "street": "677 Mohr Spring",
            "city": "Fort Lucieborough",
            "state": "Alabama",
            "zip": "11340-0878",
            "country": "Portugal"
        },
        "avatar": "https://avatars.githubusercontent.com/u/18038674",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fbcfbfcc-58f5-4b2a-a6de-a353e6a422b9",
        "name": "Ms. Harriet Upton",
        "title": "Forward Integration Agent",
        "address": {
            "street": "5776 Reilly Course",
            "city": "Howellboro",
            "state": "Massachusetts",
            "zip": "96799",
            "country": "Taiwan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/43382034",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "87f02dac-746d-4da8-87a5-ff6bdae49b9c",
        "name": "Wilma Schinner",
        "title": "Senior Factors Technician",
        "address": {
            "street": "3319 Lockman Highway",
            "city": "Elvatown",
            "state": "Indiana",
            "zip": "11070",
            "country": "Sierra Leone"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/724.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "31d39989-1ffb-4ca9-80ac-81aae18156cc",
        "name": "Billy Moore",
        "title": "Principal Interactions Analyst",
        "address": {
            "street": "516 Senger Greens",
            "city": "Fort Phyllis",
            "state": "Minnesota",
            "zip": "50358",
            "country": "Luxembourg"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/935.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "71488a07-d7a9-4e06-82da-ef092bf90491",
        "name": "Samuel Anderson I",
        "title": "Human Branding Producer",
        "address": {
            "street": "6294 Tyson Fort",
            "city": "West Nicholas",
            "state": "Texas",
            "zip": "84254",
            "country": "China"
        },
        "avatar": "https://avatars.githubusercontent.com/u/39365318",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "925338d8-743e-4991-8c9c-a9bb811bd5ff",
        "name": "Lyle Cremin",
        "title": "Central Interactions Supervisor",
        "address": {
            "street": "5317 Louisa Heights",
            "city": "New Lila",
            "state": "South Dakota",
            "zip": "60724-0412",
            "country": "Namibia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/66126761",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "745a515d-3cc8-49cd-acd1-03a253d15162",
        "name": "Wallace Gorczany",
        "title": "Investor Metrics Designer",
        "address": {
            "street": "186 Kaleigh Cliffs",
            "city": "Feestboro",
            "state": "Virginia",
            "zip": "38485-7474",
            "country": "Puerto Rico"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1037.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "00cbe30a-7c29-4a92-bf0e-5eeaae54a4c2",
        "name": "Angelina Rosenbaum",
        "title": "Regional Configuration Architect",
        "address": {
            "street": "9049 Mack Greens",
            "city": "Altheastad",
            "state": "Idaho",
            "zip": "21080",
            "country": "Brazil"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1059.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1bf29722-d7c0-4b0d-b38c-671462339838",
        "name": "Shari O'Hara",
        "title": "Principal Web Technician",
        "address": {
            "street": "107 Verna Road",
            "city": "Ontario",
            "state": "Florida",
            "zip": "81133",
            "country": "Dominican Republic"
        },
        "avatar": "https://avatars.githubusercontent.com/u/28670670",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f33bacd0-2743-4bc2-8767-1e1fce5f86da",
        "name": "Megan Bartell",
        "title": "Product Program Supervisor",
        "address": {
            "street": "863 London Glen",
            "city": "Janniebury",
            "state": "Missouri",
            "zip": "11630",
            "country": "Falkland Islands (Malvinas)"
        },
        "avatar": "https://avatars.githubusercontent.com/u/75842092",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b42a6a21-569e-43f4-94ff-00d8c07507aa",
        "name": "Veronica Ledner",
        "title": "District Assurance Developer",
        "address": {
            "street": "226 Nettie Overpass",
            "city": "Borermouth",
            "state": "Arizona",
            "zip": "56519-5650",
            "country": "Hungary"
        },
        "avatar": "https://avatars.githubusercontent.com/u/84335833",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e8adb3ad-92d6-45b6-87af-f7bb4c7f2dcc",
        "name": "Dr. Joan Little",
        "title": "District Mobility Officer",
        "address": {
            "street": "7701 Laney Rue",
            "city": "Hansenton",
            "state": "Maryland",
            "zip": "22785",
            "country": "Vanuatu"
        },
        "avatar": "https://avatars.githubusercontent.com/u/84359675",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4f6f8a13-5514-458e-89b5-463672c20c55",
        "name": "Anthony Lynch DVM",
        "title": "Direct Assurance Liaison",
        "address": {
            "street": "65740 Columbus Canyon",
            "city": "Port Nettieberg",
            "state": "Maryland",
            "zip": "11823-8207",
            "country": "Haiti"
        },
        "avatar": "https://avatars.githubusercontent.com/u/23685489",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "43fbe87f-545b-4b63-ad2c-0aad7717c264",
        "name": "Saul Stoltenberg III",
        "title": "Central Program Orchestrator",
        "address": {
            "street": "3883 Gleason Hollow",
            "city": "Emardbury",
            "state": "Wyoming",
            "zip": "53998-0047",
            "country": "Falkland Islands (Malvinas)"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/749.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7b7847be-35e5-480b-af28-e616c07c930a",
        "name": "Kurt McCullough MD",
        "title": "Global Intranet Executive",
        "address": {
            "street": "81610 Schumm Union",
            "city": "Meriden",
            "state": "Idaho",
            "zip": "38564",
            "country": "Jersey"
        },
        "avatar": "https://avatars.githubusercontent.com/u/125196",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "291172e8-75ba-4c5b-9df1-791014377b4d",
        "name": "Neal Crona",
        "title": "Forward Intranet Director",
        "address": {
            "street": "96062 Emmett Ways",
            "city": "Bowie",
            "state": "New Jersey",
            "zip": "36730-1294",
            "country": "Kazakhstan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/482.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2d1ebc3c-3858-4d31-991e-01671f121e3a",
        "name": "Sammy Maggio",
        "title": "Dynamic Applications Engineer",
        "address": {
            "street": "76655 Yost Ways",
            "city": "Casper",
            "state": "Arizona",
            "zip": "95702-3485",
            "country": "Palau"
        },
        "avatar": "https://avatars.githubusercontent.com/u/4399470",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7f14c23b-329a-46ef-a10b-ec676b5d28d2",
        "name": "Gina Abernathy",
        "title": "Principal Data Producer",
        "address": {
            "street": "9883 Ward Oval",
            "city": "West Allan",
            "state": "Iowa",
            "zip": "28543-2882",
            "country": "Marshall Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/215.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ffee9066-5191-4168-987c-65eeb64a9187",
        "name": "Mrs. Judy Murphy",
        "title": "Forward Communications Orchestrator",
        "address": {
            "street": "72536 Denesik Summit",
            "city": "East Chauncey",
            "state": "New Jersey",
            "zip": "19460-3867",
            "country": "Qatar"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1206.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1b753c14-f85f-4665-94fd-23bf3763bb09",
        "name": "Colleen Buckridge I",
        "title": "International Response Representative",
        "address": {
            "street": "290 Kulas Circle",
            "city": "Lynchhaven",
            "state": "New Mexico",
            "zip": "31954",
            "country": "Belize"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1220.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a4e0d1d5-6c86-40db-8e63-b9dca83e982a",
        "name": "Stella Harber",
        "title": "Global Integration Architect",
        "address": {
            "street": "97377 Gerhold Oval",
            "city": "Port Lamontfurt",
            "state": "Vermont",
            "zip": "44953",
            "country": "Bermuda"
        },
        "avatar": "https://avatars.githubusercontent.com/u/39419356",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e5513a34-b6aa-47fb-babc-314c08295573",
        "name": "Delia Rice",
        "title": "Chief Accountability Producer",
        "address": {
            "street": "53598 Carole Causeway",
            "city": "Hattiesburg",
            "state": "South Carolina",
            "zip": "16888-3819",
            "country": "Maldives"
        },
        "avatar": "https://avatars.githubusercontent.com/u/18783972",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2da2a757-8fef-4c20-a555-38b81dbf6063",
        "name": "Willard Greenholt II",
        "title": "Forward Web Consultant",
        "address": {
            "street": "58154 Jules Flats",
            "city": "Port Mackshire",
            "state": "Massachusetts",
            "zip": "09899-1381",
            "country": "Mauritania"
        },
        "avatar": "https://avatars.githubusercontent.com/u/39310365",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "268b553e-87f0-40c5-ba8c-c88fdfaaad9d",
        "name": "Antonia Ondricka PhD",
        "title": "Global Implementation Strategist",
        "address": {
            "street": "233 Yost Circle",
            "city": "Charleymouth",
            "state": "Wisconsin",
            "zip": "70255-8849",
            "country": "Liechtenstein"
        },
        "avatar": "https://avatars.githubusercontent.com/u/24160461",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d327ab4c-346e-4388-a027-61b57e5f1e07",
        "name": "Kathryn Stehr",
        "title": "Central Functionality Designer",
        "address": {
            "street": "949 Gorczany Forks",
            "city": "Sunnyvale",
            "state": "Virginia",
            "zip": "53416-6932",
            "country": "Lebanon"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/988.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "93d08b59-8e6f-473a-9264-2501b51121b6",
        "name": "Mathew Erdman Sr.",
        "title": "District Markets Producer",
        "address": {
            "street": "797 Schneider Causeway",
            "city": "Port Carolland",
            "state": "Idaho",
            "zip": "52388-7552",
            "country": "Mayotte"
        },
        "avatar": "https://avatars.githubusercontent.com/u/1680595",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c479fdce-16ad-4c97-b239-fa61f6ae6fd7",
        "name": "Dr. Justin O'Hara",
        "title": "Senior Mobility Coordinator",
        "address": {
            "street": "7514 Zboncak Cliffs",
            "city": "South Treva",
            "state": "Vermont",
            "zip": "32694-1003",
            "country": "Uganda"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/925.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7319fc6c-da05-462a-b1fd-087255734cc8",
        "name": "Courtney Crist",
        "title": "Regional Intranet Manager",
        "address": {
            "street": "193 Johns Avenue",
            "city": "New Maudport",
            "state": "Utah",
            "zip": "97206",
            "country": "Vanuatu"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/696.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ae3996f8-804a-4fe3-8f7c-20f56ebf91e1",
        "name": "Hubert Collier",
        "title": "Human Operations Strategist",
        "address": {
            "street": "5463 Gleichner Stravenue",
            "city": "Rolfsonview",
            "state": "South Dakota",
            "zip": "76701",
            "country": "Bhutan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/73655473",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8cb88df1-4ad2-4255-ad2a-6d732a4b772e",
        "name": "Aaron Bartoletti",
        "title": "Direct Optimization Architect",
        "address": {
            "street": "99424 Ruecker Keys",
            "city": "East Casimir",
            "state": "Indiana",
            "zip": "22076",
            "country": "Mauritania"
        },
        "avatar": "https://avatars.githubusercontent.com/u/26816218",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "57fb78a0-83d8-46d1-874d-473fd997b69b",
        "name": "Ellen Connelly",
        "title": "Dynamic Applications Orchestrator",
        "address": {
            "street": "683 Trantow Meadows",
            "city": "Garnettstad",
            "state": "Tennessee",
            "zip": "45227",
            "country": "Luxembourg"
        },
        "avatar": "https://avatars.githubusercontent.com/u/76546911",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3d153e5f-834e-468d-8772-0de29e231ffa",
        "name": "Derek McCullough",
        "title": "Future Integration Administrator",
        "address": {
            "street": "10888 Ali Villages",
            "city": "Fort Gladyce",
            "state": "Illinois",
            "zip": "10761-9582",
            "country": "Cocos (Keeling) Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/48445651",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "dfb48d9a-ce97-4b9f-bf57-c3c9e9f795d0",
        "name": "Gabriel Pfeffer",
        "title": "Regional Integration Orchestrator",
        "address": {
            "street": "77823 Libbie Vista",
            "city": "Toreychester",
            "state": "California",
            "zip": "38860-9631",
            "country": "Sierra Leone"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/7.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "37547eea-35ee-4c8b-8827-28fbee98b1ff",
        "name": "Brian Crist",
        "title": "Human Tactics Coordinator",
        "address": {
            "street": "3120 Dietrich Dale",
            "city": "Goodyear",
            "state": "Alabama",
            "zip": "93199-3312",
            "country": "Jersey"
        },
        "avatar": "https://avatars.githubusercontent.com/u/24084014",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8e232c31-5363-4748-8f5b-eafb5af40a9b",
        "name": "Dr. Dora Tromp",
        "title": "Forward Creative Orchestrator",
        "address": {
            "street": "30786 Barton Passage",
            "city": "Tulsa",
            "state": "Wisconsin",
            "zip": "89114-3292",
            "country": "Qatar"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/97.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e2027528-399c-45c1-b8e2-a27996bed9db",
        "name": "Dr. Yvonne Wuckert",
        "title": "Dynamic Usability Agent",
        "address": {
            "street": "22249 Schowalter Common",
            "city": "Bauchworth",
            "state": "Kentucky",
            "zip": "57597",
            "country": "Andorra"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/375.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "17c07333-f3e6-41d7-94d9-098270f29cfe",
        "name": "Delbert Bernhard",
        "title": "Future Applications Strategist",
        "address": {
            "street": "1485 Crooks Ramp",
            "city": "La Crosse",
            "state": "Arizona",
            "zip": "87690-8373",
            "country": "Gibraltar"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/447.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d397a411-db5f-4983-b8b2-8f8be042a39c",
        "name": "Bridget McCullough",
        "title": "Product Creative Technician",
        "address": {
            "street": "681 Simonis Harbors",
            "city": "Sipesstad",
            "state": "Hawaii",
            "zip": "48027-4412",
            "country": "Falkland Islands (Malvinas)"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1085.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7113f0a5-d181-431d-9aab-f7f901dbf88b",
        "name": "Laurence Lang",
        "title": "Dynamic Accountability Analyst",
        "address": {
            "street": "251 Wilkinson Port",
            "city": "Lowehaven",
            "state": "Illinois",
            "zip": "97921",
            "country": "Curacao"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/538.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6ec6cd8b-c118-43d8-a4c5-3b4ec2a19c03",
        "name": "Erick Cummerata",
        "title": "District Functionality Liaison",
        "address": {
            "street": "64870 Lamont Viaduct",
            "city": "Garland",
            "state": "Mississippi",
            "zip": "04156",
            "country": "American Samoa"
        },
        "avatar": "https://avatars.githubusercontent.com/u/60564492",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1e6d1cf5-50f7-4b7b-8a99-76786e8e16c1",
        "name": "Gerardo Kling",
        "title": "Corporate Accountability Officer",
        "address": {
            "street": "8696 Madyson Key",
            "city": "Schmidtberg",
            "state": "Oregon",
            "zip": "73017",
            "country": "Slovakia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/738.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8e055fb4-2bd9-4bea-9abb-726cdad72ea2",
        "name": "Maurice Hahn DVM",
        "title": "Forward Applications Planner",
        "address": {
            "street": "21947 Melisa Viaduct",
            "city": "Fritschstead",
            "state": "Hawaii",
            "zip": "81051-6038",
            "country": "Seychelles"
        },
        "avatar": "https://avatars.githubusercontent.com/u/44536506",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fc6a7416-dcd0-4674-b62a-5bea26a0209b",
        "name": "Heidi Kilback",
        "title": "Internal Branding Agent",
        "address": {
            "street": "757 McLaughlin Harbor",
            "city": "West Madge",
            "state": "Kansas",
            "zip": "97094-7970",
            "country": "Thailand"
        },
        "avatar": "https://avatars.githubusercontent.com/u/61788417",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f07051d8-0fb1-4918-9000-ec8dae7ce5c7",
        "name": "Angelica Pacocha",
        "title": "International Directives Assistant",
        "address": {
            "street": "475 Abelardo Courts",
            "city": "Saigeview",
            "state": "West Virginia",
            "zip": "42095-0653",
            "country": "North Macedonia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/32943415",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "009b28bd-61c2-4f8b-8cce-59697d062aab",
        "name": "Elsie Corkery",
        "title": "Global Data Developer",
        "address": {
            "street": "864 Melyssa Grove",
            "city": "Eden Prairie",
            "state": "Indiana",
            "zip": "73482",
            "country": "Northern Mariana Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/76126598",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9b6ff659-190e-4225-b839-342ff122d7f9",
        "name": "Cassandra Beatty V",
        "title": "Lead Quality Producer",
        "address": {
            "street": "185 White Plaza",
            "city": "Rancho Santa Margarita",
            "state": "Nevada",
            "zip": "07536-3667",
            "country": "Saint Barthelemy"
        },
        "avatar": "https://avatars.githubusercontent.com/u/87860159",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "421331c7-3c65-4f3d-97a5-ad44882113ca",
        "name": "Martha Mosciski",
        "title": "Regional Operations Orchestrator",
        "address": {
            "street": "7257 Hessel Parkway",
            "city": "New Generalchester",
            "state": "Pennsylvania",
            "zip": "59576-7271",
            "country": "Papua New Guinea"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/576.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "59799415-b1ea-4211-9373-889f6dbe41fc",
        "name": "Pam Johnson",
        "title": "Corporate Response Architect",
        "address": {
            "street": "556 Barton Drives",
            "city": "North Vernice",
            "state": "California",
            "zip": "65149",
            "country": "Norway"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1124.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "27e5eb05-c426-4c0f-ae15-e366358920b3",
        "name": "Mattie Cole",
        "title": "Global Accountability Technician",
        "address": {
            "street": "535 Robyn Gardens",
            "city": "Edwinafield",
            "state": "Wisconsin",
            "zip": "49048-5602",
            "country": "Somalia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1145.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0c2e5b7e-4a80-44c4-8944-c9a23b4a99f2",
        "name": "Joanne Haag",
        "title": "Global Solutions Architect",
        "address": {
            "street": "17689 Weimann Walk",
            "city": "Clarksville",
            "state": "Wyoming",
            "zip": "22948-8539",
            "country": "Brazil"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1016.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "df6cfba2-b7a8-45b2-b25f-1f65b2f42787",
        "name": "Miss Myra Erdman",
        "title": "Product Paradigm Specialist",
        "address": {
            "street": "77770 Cummings Locks",
            "city": "Garland",
            "state": "New Mexico",
            "zip": "64225-3203",
            "country": "Bouvet Island"
        },
        "avatar": "https://avatars.githubusercontent.com/u/29185765",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "201b95d0-69dd-451c-95eb-b20f7256cfa8",
        "name": "Misty Bosco",
        "title": "Central Program Engineer",
        "address": {
            "street": "37067 Wehner Via",
            "city": "North Marcelbury",
            "state": "California",
            "zip": "69974-5296",
            "country": "Nauru"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1173.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a90dac52-0f22-4abb-a51a-b88968aeeb5c",
        "name": "Toni Feeney",
        "title": "National Marketing Designer",
        "address": {
            "street": "36441 Jast Rapid",
            "city": "Pfannerstillport",
            "state": "Minnesota",
            "zip": "65994-7220",
            "country": "Guinea"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/82.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "19a7eb75-68e6-4af5-b6df-c9f6cfb263a9",
        "name": "Neil Jakubowski",
        "title": "Principal Quality Director",
        "address": {
            "street": "6932 Eulah Forge",
            "city": "Centreville",
            "state": "South Carolina",
            "zip": "41859-4751",
            "country": "Estonia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/22553228",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d97ef258-83a8-4aa8-b29e-791565eea268",
        "name": "Tim Volkman",
        "title": "Legacy Usability Assistant",
        "address": {
            "street": "76035 Gilberto Glen",
            "city": "Emeliastead",
            "state": "Wisconsin",
            "zip": "10032-8506",
            "country": "Singapore"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/706.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "57b17ef3-4b6f-48c0-aaa2-38f6114b51a3",
        "name": "Alan Fahey",
        "title": "Direct Infrastructure Specialist",
        "address": {
            "street": "1782 Ullrich Forest",
            "city": "Lake Annalise",
            "state": "New York",
            "zip": "02535-8420",
            "country": "Suriname"
        },
        "avatar": "https://avatars.githubusercontent.com/u/43880697",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "bd8942ea-e9f8-4669-bda1-5d576e6064f8",
        "name": "Bennie Cronin",
        "title": "Corporate Tactics Manager",
        "address": {
            "street": "3590 Tanner Highway",
            "city": "North Jerry",
            "state": "Montana",
            "zip": "62229",
            "country": "Hungary"
        },
        "avatar": "https://avatars.githubusercontent.com/u/95036353",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "42999d17-08e4-4b50-9bbe-331045d8c063",
        "name": "Rhonda Pouros",
        "title": "Human Markets Specialist",
        "address": {
            "street": "41885 Rudolph Avenue",
            "city": "Worcester",
            "state": "Virginia",
            "zip": "20632",
            "country": "Guadeloupe"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/795.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "140779d3-392b-42ca-9ba5-b4b6a18e8eac",
        "name": "Virgil Reilly",
        "title": "Customer Quality Engineer",
        "address": {
            "street": "1661 Howe Fords",
            "city": "Smyrna",
            "state": "Tennessee",
            "zip": "58471",
            "country": "Sao Tome and Principe"
        },
        "avatar": "https://avatars.githubusercontent.com/u/14871965",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c9a3c94e-6fe1-4771-81e2-33720c9ca118",
        "name": "Virgil Okuneva",
        "title": "Corporate Creative Associate",
        "address": {
            "street": "69574 Medhurst Loaf",
            "city": "Columbus",
            "state": "Delaware",
            "zip": "67817-0881",
            "country": "Jamaica"
        },
        "avatar": "https://avatars.githubusercontent.com/u/74011555",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "61e81e05-8df3-443c-b9bc-940305ef1d9b",
        "name": "Betsy Tillman",
        "title": "District Quality Strategist",
        "address": {
            "street": "2188 Larkin Burgs",
            "city": "Winston-Salem",
            "state": "California",
            "zip": "22191-6916",
            "country": "Uzbekistan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1192.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d632bc52-dcff-4854-8958-9f2a97ee5968",
        "name": "Lorene Botsford Sr.",
        "title": "National Assurance Associate",
        "address": {
            "street": "4846 Vandervort Highway",
            "city": "Shieldsshire",
            "state": "Colorado",
            "zip": "92129",
            "country": "Seychelles"
        },
        "avatar": "https://avatars.githubusercontent.com/u/23303031",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8f2ca073-5613-40be-acc4-e9392650e075",
        "name": "Claire Skiles-Lakin",
        "title": "Direct Integration Orchestrator",
        "address": {
            "street": "297 Mayert Lights",
            "city": "Kallieborough",
            "state": "Colorado",
            "zip": "76311-3932",
            "country": "Saint Barthelemy"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/739.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "18034a8c-8fa7-4316-baa6-47d1d212780a",
        "name": "Jodi Ondricka",
        "title": "Chief Data Technician",
        "address": {
            "street": "57160 Leannon Circle",
            "city": "Port Tyrelburgh",
            "state": "Wyoming",
            "zip": "81974",
            "country": "Belarus"
        },
        "avatar": "https://avatars.githubusercontent.com/u/12438850",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1f7a1966-6fa0-4330-afb5-7a5a17001dc6",
        "name": "Juana Funk I",
        "title": "Human Group Designer",
        "address": {
            "street": "782 Mraz Forges",
            "city": "Terryworth",
            "state": "Washington",
            "zip": "34603-9647",
            "country": "San Marino"
        },
        "avatar": "https://avatars.githubusercontent.com/u/68610198",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "40abb9db-60f5-4594-9f48-288f3039cf6e",
        "name": "Trevor Price",
        "title": "Chief Creative Producer",
        "address": {
            "street": "74125 Hills Estates",
            "city": "New Tylerview",
            "state": "Vermont",
            "zip": "69263",
            "country": "Egypt"
        },
        "avatar": "https://avatars.githubusercontent.com/u/64711168",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f9fc48e6-6039-42a6-80d8-b240c2bc6f7b",
        "name": "Stacey Feil",
        "title": "Corporate Security Producer",
        "address": {
            "street": "900 Leannon Turnpike",
            "city": "Hacketthaven",
            "state": "Virginia",
            "zip": "92704",
            "country": "Mexico"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1155.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fb686aed-babe-4e3f-87d9-34a04d7c2a10",
        "name": "Brenda Schaden",
        "title": "Senior Configuration Coordinator",
        "address": {
            "street": "51689 Vicente Flats",
            "city": "Klingland",
            "state": "New Hampshire",
            "zip": "16678-0325",
            "country": "United Arab Emirates"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1223.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "10724f45-543a-4427-86f4-2dc8aa10bd63",
        "name": "Luther Runolfsdottir",
        "title": "Principal Assurance Administrator",
        "address": {
            "street": "2767 Tara Corner",
            "city": "Ferrychester",
            "state": "Mississippi",
            "zip": "44717",
            "country": "Chad"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/256.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "eef9c9fd-8fec-409c-9f8f-e70b4b4eb460",
        "name": "Natasha Kunze",
        "title": "Product Infrastructure Liaison",
        "address": {
            "street": "92913 Braulio Wells",
            "city": "Beavercreek",
            "state": "Missouri",
            "zip": "98145-3753",
            "country": "Saint Vincent and the Grenadines"
        },
        "avatar": "https://avatars.githubusercontent.com/u/22162406",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "623c2805-03f0-4e56-b0f4-82ef56150804",
        "name": "Miss Ebony Gleichner",
        "title": "Dynamic Tactics Assistant",
        "address": {
            "street": "9606 Jovani Rapids",
            "city": "Freddieport",
            "state": "Massachusetts",
            "zip": "72146-9949",
            "country": "Hong Kong"
        },
        "avatar": "https://avatars.githubusercontent.com/u/2942046",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1cad5a71-a1ab-4f23-8c42-c3df141c7911",
        "name": "Yvonne Von",
        "title": "Forward Tactics Developer",
        "address": {
            "street": "8645 Lowe Plaza",
            "city": "Fresno",
            "state": "Maine",
            "zip": "47130-4771",
            "country": "Cook Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/96092384",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "03c7a955-b02f-4bf3-b338-4fcd4f9f0f87",
        "name": "Abel Schowalter",
        "title": "Direct Accounts Architect",
        "address": {
            "street": "74107 Alan Villages",
            "city": "Port Quinn",
            "state": "South Dakota",
            "zip": "02444-8767",
            "country": "Jersey"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1009.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "84d8eb28-9b7f-4216-bfe2-935a6339d17c",
        "name": "Jamie Thiel",
        "title": "Central Accounts Consultant",
        "address": {
            "street": "8834 Emely Hill",
            "city": "East Julie",
            "state": "Virginia",
            "zip": "36632",
            "country": "Ireland"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/365.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "98858846-1027-4a77-bff6-bfcdc116475e",
        "name": "Lora D'Amore",
        "title": "International Integration Supervisor",
        "address": {
            "street": "867 Claudia Terrace",
            "city": "Wichita Falls",
            "state": "New Hampshire",
            "zip": "18138-6361",
            "country": "Lesotho"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/446.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d241a628-f24e-4a2d-9293-e6666fcb6dec",
        "name": "Steven Anderson",
        "title": "Investor Integration Assistant",
        "address": {
            "street": "57516 Kris Summit",
            "city": "Cruickshankmouth",
            "state": "Nebraska",
            "zip": "98873",
            "country": "Venezuela"
        },
        "avatar": "https://avatars.githubusercontent.com/u/70289510",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fe215604-4efd-4795-92a8-2283e6ac8be1",
        "name": "Ray Satterfield",
        "title": "Direct Program Strategist",
        "address": {
            "street": "92884 White Fort",
            "city": "New Mohammedland",
            "state": "Hawaii",
            "zip": "27780-0421",
            "country": "Antigua and Barbuda"
        },
        "avatar": "https://avatars.githubusercontent.com/u/6510957",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c910ed19-550f-4de8-bb77-0adc92a69b7e",
        "name": "Adrienne Lang-Kuhlman",
        "title": "Regional Operations Agent",
        "address": {
            "street": "2567 Caterina Flat",
            "city": "Mesquite",
            "state": "North Dakota",
            "zip": "03007-3529",
            "country": "Eritrea"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "74e36b49-dd8a-46f2-9bf5-5dad5b475df8",
        "name": "Tracy Schinner",
        "title": "Regional Division Facilitator",
        "address": {
            "street": "5556 Ondricka Oval",
            "city": "Noreneborough",
            "state": "Nebraska",
            "zip": "69249",
            "country": "India"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/208.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "44f2ad1c-f4d5-414f-a861-248c6345c784",
        "name": "Johnnie Swift",
        "title": "Central Accountability Developer",
        "address": {
            "street": "77053 Alivia Way",
            "city": "Lake Lazaro",
            "state": "Florida",
            "zip": "42525-3810",
            "country": "Switzerland"
        },
        "avatar": "https://avatars.githubusercontent.com/u/60272291",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "638c7bb4-6088-425d-9337-d9c7f65f7554",
        "name": "Kellie Bednar",
        "title": "Product Brand Associate",
        "address": {
            "street": "493 Schiller Roads",
            "city": "Jacobimouth",
            "state": "Michigan",
            "zip": "43707-8191",
            "country": "Mayotte"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1010.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4e414378-c12d-46a4-9209-fafe46ddd575",
        "name": "Jerry Blick",
        "title": "Senior Identity Orchestrator",
        "address": {
            "street": "60085 Corwin Viaduct",
            "city": "South Juwan",
            "state": "Colorado",
            "zip": "22804-6164",
            "country": "Heard Island and McDonald Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1004.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e5bd95fc-384e-4c8c-a479-ae85408d798d",
        "name": "Clint Oberbrunner",
        "title": "Corporate Tactics Specialist",
        "address": {
            "street": "67743 Marilyne Garden",
            "city": "Westport",
            "state": "Arkansas",
            "zip": "58421",
            "country": "Luxembourg"
        },
        "avatar": "https://avatars.githubusercontent.com/u/22684899",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "086dbc5d-a5b0-46db-a639-ed7be50c4e61",
        "name": "Mr. Juan Gleichner-Moore",
        "title": "Corporate Data Planner",
        "address": {
            "street": "96745 Ebert Lake",
            "city": "Port Nyasiaview",
            "state": "Mississippi",
            "zip": "10783",
            "country": "Uzbekistan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1027.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "dcd12973-191d-4af7-a123-52a6976fed05",
        "name": "Cedric Schultz",
        "title": "National Data Director",
        "address": {
            "street": "22283 Amya Mountain",
            "city": "Metzcester",
            "state": "Arkansas",
            "zip": "46795",
            "country": "Slovakia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/241.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e6ecd3d0-3b31-488b-91a4-79ead636ce94",
        "name": "Courtney Osinski-Cremin MD",
        "title": "Regional Infrastructure Architect",
        "address": {
            "street": "171 Chase Flats",
            "city": "South Alisa",
            "state": "Pennsylvania",
            "zip": "44990",
            "country": "Mauritania"
        },
        "avatar": "https://avatars.githubusercontent.com/u/92300303",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fa8eccaf-02e9-4f5f-a401-b367232b05b5",
        "name": "Miss Jessica Spencer II",
        "title": "Forward Communications Technician",
        "address": {
            "street": "97237 Jada Parkway",
            "city": "South Hilbertfurt",
            "state": "Massachusetts",
            "zip": "38975",
            "country": "Cocos (Keeling) Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/88441831",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "641f7ac8-8216-4b2c-bc27-7e0c42120d39",
        "name": "Domingo Monahan",
        "title": "Chief Research Officer",
        "address": {
            "street": "2408 Modesta Fall",
            "city": "Crooksboro",
            "state": "Kansas",
            "zip": "23882",
            "country": "Heard Island and McDonald Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/160.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ef0beb28-b94b-4481-a9bd-8480a96b2e9b",
        "name": "Dexter Rohan",
        "title": "Chief Creative Manager",
        "address": {
            "street": "8393 Clovis Roads",
            "city": "Tigard",
            "state": "Alabama",
            "zip": "29895",
            "country": "Argentina"
        },
        "avatar": "https://avatars.githubusercontent.com/u/17169584",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "48a900b9-3dad-4323-bdd9-c254fe95c2cf",
        "name": "Teri Crooks-Bayer",
        "title": "Legacy Assurance Executive",
        "address": {
            "street": "297 Retta Lock",
            "city": "Grand Forks",
            "state": "Louisiana",
            "zip": "26289-4690",
            "country": "San Marino"
        },
        "avatar": "https://avatars.githubusercontent.com/u/38177190",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3d62ccc9-6531-48dd-998e-54f021f8f9f5",
        "name": "Mrs. Belinda Halvorson-Tremblay",
        "title": "Dynamic Operations Planner",
        "address": {
            "street": "6440 Ferry Via",
            "city": "Generalside",
            "state": "Wisconsin",
            "zip": "49545",
            "country": "Libyan Arab Jamahiriya"
        },
        "avatar": "https://avatars.githubusercontent.com/u/56638462",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "63619461-30fd-40ea-ae56-8186f256321c",
        "name": "Muriel Hayes",
        "title": "Principal Brand Strategist",
        "address": {
            "street": "298 Stamm Squares",
            "city": "Rapid City",
            "state": "Kansas",
            "zip": "76238",
            "country": "Tajikistan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/200.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ea146874-4da1-4a51-b2dc-027c762b4744",
        "name": "Kenneth Bogisich",
        "title": "Customer Intranet Executive",
        "address": {
            "street": "371 Kerluke Tunnel",
            "city": "North Deon",
            "state": "Oklahoma",
            "zip": "71748",
            "country": "Curacao"
        },
        "avatar": "https://avatars.githubusercontent.com/u/3823963",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "81392f5d-b3f4-43f5-875a-5527a84a6299",
        "name": "Joe Wehner",
        "title": "Senior Directives Developer",
        "address": {
            "street": "536 Kassulke Way",
            "city": "Port Gaylechester",
            "state": "South Dakota",
            "zip": "75374-9658",
            "country": "Czechia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1004.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f8a48bc9-0533-46b2-96d8-3d7076c84ca7",
        "name": "Matthew McKenzie",
        "title": "Dynamic Branding Architect",
        "address": {
            "street": "5922 Price Ranch",
            "city": "Chico",
            "state": "Iowa",
            "zip": "34700",
            "country": "Monaco"
        },
        "avatar": "https://avatars.githubusercontent.com/u/3799962",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "850dd0fb-608e-4abe-9cb1-e7149681312b",
        "name": "Rosemarie Douglas",
        "title": "Future Markets Associate",
        "address": {
            "street": "874 Upton Mews",
            "city": "Lake Janaestead",
            "state": "Tennessee",
            "zip": "70649-7183",
            "country": "British Indian Ocean Territory (Chagos Archipelago)"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/396.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "edb8602c-16cb-47db-b8fc-9ea72bd3155c",
        "name": "Sandy Wiza",
        "title": "Direct Functionality Orchestrator",
        "address": {
            "street": "75414 Collins Haven",
            "city": "Daremouth",
            "state": "Missouri",
            "zip": "17750-4465",
            "country": "Denmark"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/214.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "57b390e3-5409-4c84-a731-d1df6b8ad11c",
        "name": "Mr. Adrian Wilkinson",
        "title": "National Solutions Specialist",
        "address": {
            "street": "3896 McGlynn Point",
            "city": "Ames",
            "state": "North Dakota",
            "zip": "77615-3173",
            "country": "United States Minor Outlying Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1206.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "145c4afd-5391-4640-bc1e-8a0ad03470f7",
        "name": "Freddie Rippin",
        "title": "Central Usability Representative",
        "address": {
            "street": "4786 Morissette Lake",
            "city": "East Gennarofort",
            "state": "Iowa",
            "zip": "88387-8555",
            "country": "Kiribati"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1021.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c115e948-ede7-4fe0-b611-815ce1f2a419",
        "name": "Rosie Weissnat",
        "title": "Principal Metrics Representative",
        "address": {
            "street": "19442 Cody Vista",
            "city": "South Presleyberg",
            "state": "New Hampshire",
            "zip": "81228-6316",
            "country": "Jordan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/61002970",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6a287801-a499-48ea-aa40-ec4057e09bdb",
        "name": "Kenny Ryan",
        "title": "International Configuration Agent",
        "address": {
            "street": "58381 Dare Cliffs",
            "city": "East Shannon",
            "state": "Rhode Island",
            "zip": "73921-1537",
            "country": "Ecuador"
        },
        "avatar": "https://avatars.githubusercontent.com/u/2959602",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8251d88e-b3e1-4c62-97b1-e6f33e447f53",
        "name": "Jeannette Hills",
        "title": "Customer Creative Architect",
        "address": {
            "street": "400 Yoshiko Knolls",
            "city": "Kuhicfurt",
            "state": "Virginia",
            "zip": "92744-9895",
            "country": "China"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/213.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b02fc364-913d-4155-a7dd-b124852438eb",
        "name": "Kelli Becker",
        "title": "Chief Identity Manager",
        "address": {
            "street": "83951 Afton Camp",
            "city": "Apex",
            "state": "Washington",
            "zip": "80235-8728",
            "country": "Dominica"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/749.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4cfa6963-d789-42ad-991e-fafb8461ae8e",
        "name": "Andres Schinner",
        "title": "Regional Paradigm Developer",
        "address": {
            "street": "9416 Jaskolski Crossing",
            "city": "Kohlerview",
            "state": "Nebraska",
            "zip": "26947-0665",
            "country": "Peru"
        },
        "avatar": "https://avatars.githubusercontent.com/u/34122383",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "365c3bfb-26b9-482c-97de-fe4c5aabe2bb",
        "name": "Katrina Jacobi V",
        "title": "Lead Creative Analyst",
        "address": {
            "street": "34252 Schmidt Ramp",
            "city": "O'Haraside",
            "state": "Maryland",
            "zip": "14783-9431",
            "country": "Iraq"
        },
        "avatar": "https://avatars.githubusercontent.com/u/9097449",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "233c6fe1-944c-4caf-bf0f-0b646542c04e",
        "name": "Craig Ritchie",
        "title": "Product Accountability Associate",
        "address": {
            "street": "759 Clementine Stravenue",
            "city": "Christinechester",
            "state": "Oklahoma",
            "zip": "81787-3073",
            "country": "French Guiana"
        },
        "avatar": "https://avatars.githubusercontent.com/u/14000932",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7e6034ed-abff-4bae-a84c-56966eb0860e",
        "name": "Lillie Rosenbaum",
        "title": "International Usability Specialist",
        "address": {
            "street": "2984 Ankunding Cliff",
            "city": "San Tan Valley",
            "state": "Michigan",
            "zip": "80634-7416",
            "country": "Sudan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/69462669",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fe38a23c-2c3a-49d5-b5d9-935d23bf3def",
        "name": "Jeffery Spencer",
        "title": "District Creative Producer",
        "address": {
            "street": "99389 Shanahan Crossing",
            "city": "South Sandrine",
            "state": "Tennessee",
            "zip": "79412",
            "country": "Slovenia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/60540943",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f95df7b5-eff4-41d1-8ce2-85c0d059f5eb",
        "name": "Kenneth Kuphal",
        "title": "Investor Metrics Technician",
        "address": {
            "street": "2983 Mraz Motorway",
            "city": "Bayleecester",
            "state": "South Dakota",
            "zip": "83559",
            "country": "Lebanon"
        },
        "avatar": "https://avatars.githubusercontent.com/u/47864193",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "372d5f98-5f70-415b-8632-195cfea1880c",
        "name": "Fredrick Rolfson",
        "title": "Product Identity Assistant",
        "address": {
            "street": "2702 Skiles Field",
            "city": "North Omermouth",
            "state": "Alaska",
            "zip": "76752-4590",
            "country": "Malawi"
        },
        "avatar": "https://avatars.githubusercontent.com/u/64747786",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8583f307-da31-4874-9d3f-01d97bfce208",
        "name": "Myron Lang-Leuschke",
        "title": "Future Applications Planner",
        "address": {
            "street": "884 Zieme Ford",
            "city": "Aloha",
            "state": "Maine",
            "zip": "09256",
            "country": "Cote d'Ivoire"
        },
        "avatar": "https://avatars.githubusercontent.com/u/19022149",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f0f00cb0-1ec8-495e-8003-ba0b543d68f0",
        "name": "Floyd Kuvalis",
        "title": "Forward Identity Technician",
        "address": {
            "street": "243 Johnston Extensions",
            "city": "Rapid City",
            "state": "Arkansas",
            "zip": "14792",
            "country": "Uzbekistan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/566.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c6319887-293f-466c-9315-7a422a6262be",
        "name": "Mitchell Towne Sr.",
        "title": "International Applications Administrator",
        "address": {
            "street": "43600 Turner Grove",
            "city": "Devanton",
            "state": "Wisconsin",
            "zip": "64481",
            "country": "Niger"
        },
        "avatar": "https://avatars.githubusercontent.com/u/5340138",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1eaebada-3da7-4e26-bfd4-b64d1e673797",
        "name": "Wilma Windler",
        "title": "Lead Communications Strategist",
        "address": {
            "street": "855 Jeffrey Wells",
            "city": "West Madisenmouth",
            "state": "Connecticut",
            "zip": "71102-0337",
            "country": "Brunei Darussalam"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1066.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b59dd98b-215b-4b7c-b891-3d7cab55a737",
        "name": "Edgar Shields",
        "title": "Regional Functionality Engineer",
        "address": {
            "street": "457 Hagenes Glen",
            "city": "West Katarina",
            "state": "Arkansas",
            "zip": "82290-5544",
            "country": "Democratic Republic of the Congo"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/819.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "936f7bad-8d7e-4f45-ba1f-e9790ccaa42d",
        "name": "Juana Predovic",
        "title": "Direct Marketing Planner",
        "address": {
            "street": "7873 Gusikowski Ranch",
            "city": "Burleson",
            "state": "Colorado",
            "zip": "13376",
            "country": "Peru"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/388.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e8661832-ad69-4db5-957d-6709d2ebc2c5",
        "name": "Geoffrey Wiza",
        "title": "Product Research Consultant",
        "address": {
            "street": "75938 Corrine Fields",
            "city": "Green Bay",
            "state": "Maryland",
            "zip": "87271",
            "country": "Slovakia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/693.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8029ab65-2666-4139-bee0-17f41573b8c8",
        "name": "Arturo Blanda",
        "title": "Lead Communications Associate",
        "address": {
            "street": "5683 Dibbert Hills",
            "city": "Bryanabury",
            "state": "Massachusetts",
            "zip": "42647-6472",
            "country": "El Salvador"
        },
        "avatar": "https://avatars.githubusercontent.com/u/33950539",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b43b9c94-d5e4-4cb6-b582-add2b367159c",
        "name": "Faith Kuhlman",
        "title": "Investor Tactics Representative",
        "address": {
            "street": "64952 Wilderman Crossroad",
            "city": "Lake Stefan",
            "state": "New Jersey",
            "zip": "46249-8001",
            "country": "Yemen"
        },
        "avatar": "https://avatars.githubusercontent.com/u/17125308",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ce5a32eb-7755-4f13-a5d6-49fa9d693d99",
        "name": "Rogelio Denesik MD",
        "title": "Customer Creative Specialist",
        "address": {
            "street": "3371 Daisy Greens",
            "city": "Lawton",
            "state": "South Dakota",
            "zip": "01236-9253",
            "country": "China"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1153.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8f8db080-456b-4968-b6a4-b4815cdefa76",
        "name": "Kara Erdman Sr.",
        "title": "Senior Functionality Analyst",
        "address": {
            "street": "31454 Bauch Fort",
            "city": "Monahanhaven",
            "state": "Maine",
            "zip": "98825-1382",
            "country": "Sweden"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/285.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e80f3f04-6de5-40e9-b988-b442f1a07f21",
        "name": "Herbert Schuppe",
        "title": "Customer Interactions Designer",
        "address": {
            "street": "461 Kennith Well",
            "city": "North Russside",
            "state": "North Carolina",
            "zip": "55356-5315",
            "country": "Tonga"
        },
        "avatar": "https://avatars.githubusercontent.com/u/77979718",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3dbf807b-4959-452f-a727-de4c193b6fd8",
        "name": "Isabel Weissnat",
        "title": "Direct Response Strategist",
        "address": {
            "street": "31020 Orville Corners",
            "city": "Bethlehem",
            "state": "Tennessee",
            "zip": "69887-9225",
            "country": "Republic of Korea"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1058.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c835ada0-1d71-403d-a4cb-f017e6cfa40a",
        "name": "Kristy Kohler",
        "title": "Global Usability Executive",
        "address": {
            "street": "948 Jarrod Burgs",
            "city": "West Shawn",
            "state": "New Mexico",
            "zip": "54569-5338",
            "country": "Bosnia and Herzegovina"
        },
        "avatar": "https://avatars.githubusercontent.com/u/52042987",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3a5a9a67-691c-4032-943b-452c65d83d31",
        "name": "Evelyn Bauch",
        "title": "Chief Paradigm Liaison",
        "address": {
            "street": "1976 Gibson Creek",
            "city": "Blandafort",
            "state": "Indiana",
            "zip": "33920",
            "country": "Gabon"
        },
        "avatar": "https://avatars.githubusercontent.com/u/73721047",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "84d252df-08eb-4238-8c6c-bb5919871311",
        "name": "Dana Gutkowski",
        "title": "Legacy Functionality Agent",
        "address": {
            "street": "1332 Thea Course",
            "city": "Fort Ana",
            "state": "Arkansas",
            "zip": "74416-6794",
            "country": "Ethiopia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/63264484",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7057883a-2dd9-4cae-8e3b-f1b4e4716a09",
        "name": "Maggie Schimmel",
        "title": "Future Infrastructure Facilitator",
        "address": {
            "street": "3666 Kirlin Islands",
            "city": "East Zion",
            "state": "Texas",
            "zip": "15460-4712",
            "country": "Bulgaria"
        },
        "avatar": "https://avatars.githubusercontent.com/u/84746474",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3f5e2af4-3ddc-4335-892b-e9e6bdffdd53",
        "name": "Miss Emily Weimann",
        "title": "International Solutions Facilitator",
        "address": {
            "street": "3914 Wiza Trail",
            "city": "Fort Jessikaville",
            "state": "New Mexico",
            "zip": "26383-8976",
            "country": "China"
        },
        "avatar": "https://avatars.githubusercontent.com/u/72309220",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e10f68a7-75cc-4db7-8320-2bbcb99b1bfb",
        "name": "Mr. Guadalupe Heaney",
        "title": "International Marketing Associate",
        "address": {
            "street": "2412 Ardith Plain",
            "city": "Lake Curtis",
            "state": "Iowa",
            "zip": "50886",
            "country": "Sierra Leone"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/155.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4ac55d2e-0afa-46ca-9825-6f92187c0b8d",
        "name": "Tyrone Konopelski",
        "title": "Corporate Accountability Technician",
        "address": {
            "street": "7590 Hayley Ramp",
            "city": "Hickleville",
            "state": "Vermont",
            "zip": "77398",
            "country": "United Kingdom"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "438390d5-b1b9-4eb3-9b2a-76b4400942cc",
        "name": "Peter Kub",
        "title": "Internal Communications Executive",
        "address": {
            "street": "70633 Blanda Crescent",
            "city": "Lake Arlieburgh",
            "state": "New York",
            "zip": "38260",
            "country": "Egypt"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/310.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a5bd8a9f-bdb2-4092-91f0-8610043ca745",
        "name": "Ms. Miriam Connelly",
        "title": "Central Creative Director",
        "address": {
            "street": "2310 Durgan Mountains",
            "city": "Devantown",
            "state": "Arkansas",
            "zip": "95259-7274",
            "country": "Egypt"
        },
        "avatar": "https://avatars.githubusercontent.com/u/19929668",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4479a622-4186-4b24-9086-7e16b34e5c3d",
        "name": "Nina Predovic",
        "title": "Global Security Director",
        "address": {
            "street": "9155 McCullough Forks",
            "city": "Port Juniusside",
            "state": "California",
            "zip": "97746-7932",
            "country": "Ecuador"
        },
        "avatar": "https://avatars.githubusercontent.com/u/86372419",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b6fe21a8-57ba-45d7-8f79-c75b19532807",
        "name": "Ebony Bahringer",
        "title": "Direct Applications Supervisor",
        "address": {
            "street": "1309 Funk Burgs",
            "city": "West Abdulstead",
            "state": "Rhode Island",
            "zip": "14098-2953",
            "country": "Colombia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/87655179",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2454f342-46f0-4821-a215-03203ebc8fab",
        "name": "Darryl Torphy-Von",
        "title": "Product Accountability Producer",
        "address": {
            "street": "95512 Krajcik Fork",
            "city": "Lake Lonieworth",
            "state": "Maryland",
            "zip": "43486",
            "country": "Jordan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/42865583",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ac701791-ecb5-4585-a3d2-cf27613a5595",
        "name": "Dr. Rudy Braun",
        "title": "Chief Accounts Assistant",
        "address": {
            "street": "87181 Carlotta Flat",
            "city": "Donnellyburgh",
            "state": "Indiana",
            "zip": "86912-6073",
            "country": "Kenya"
        },
        "avatar": "https://avatars.githubusercontent.com/u/64987240",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "18176fa6-d39d-42bd-ac2f-f86b13879ef1",
        "name": "George Cole",
        "title": "Forward Implementation Liaison",
        "address": {
            "street": "355 Carter Extensions",
            "city": "Lake Enoch",
            "state": "Iowa",
            "zip": "93878-1068",
            "country": "Austria"
        },
        "avatar": "https://avatars.githubusercontent.com/u/23432517",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9f071a37-e9c5-4226-9697-55a5b947473e",
        "name": "Christian Stroman",
        "title": "Legacy Configuration Specialist",
        "address": {
            "street": "8795 Hudson Landing",
            "city": "South Reinholdview",
            "state": "Minnesota",
            "zip": "92746-6439",
            "country": "Sri Lanka"
        },
        "avatar": "https://avatars.githubusercontent.com/u/91916704",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "60bd8580-afc0-4199-8635-3e8385940cd0",
        "name": "Irene Thompson",
        "title": "Human Operations Producer",
        "address": {
            "street": "2187 Johanna Valley",
            "city": "St. Paul",
            "state": "Missouri",
            "zip": "37439-6030",
            "country": "Iceland"
        },
        "avatar": "https://avatars.githubusercontent.com/u/59039553",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9d19a6f9-041f-4c0d-9383-b95f8ff0eb9f",
        "name": "Hubert Schoen Sr.",
        "title": "National Identity Technician",
        "address": {
            "street": "940 Zachary Vista",
            "city": "Schuliststad",
            "state": "Indiana",
            "zip": "64731-9430",
            "country": "Malawi"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/286.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c4c0a464-2695-44fa-bdb2-dd0ef0668f6c",
        "name": "Maxine Franey-Abshire PhD",
        "title": "Human Data Supervisor",
        "address": {
            "street": "865 Kaleb Walks",
            "city": "Sunrise",
            "state": "Vermont",
            "zip": "74358-1182",
            "country": "Marshall Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/254.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8d76689b-3913-4909-bdc8-ac3a75b71237",
        "name": "Dr. Eduardo Anderson",
        "title": "Principal Research Facilitator",
        "address": {
            "street": "1944 Stroman Inlet",
            "city": "Ryanfield",
            "state": "Louisiana",
            "zip": "68202",
            "country": "United States Minor Outlying Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/58272896",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6c5cb446-5c00-40f5-9b28-e6d55fdd816e",
        "name": "Roland Hudson-Leffler",
        "title": "Product Web Coordinator",
        "address": {
            "street": "248 Connelly Ridges",
            "city": "Port Jessieworth",
            "state": "Nebraska",
            "zip": "93563-9598",
            "country": "Uganda"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/80.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4cd7de74-779b-473c-98d9-2aecd38d25f8",
        "name": "Roland Gorczany-Bode",
        "title": "Investor Infrastructure Associate",
        "address": {
            "street": "122 Wisoky Flat",
            "city": "Port Carletonport",
            "state": "Colorado",
            "zip": "33601",
            "country": "Ecuador"
        },
        "avatar": "https://avatars.githubusercontent.com/u/58540178",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "bd97fd67-c1d3-48b4-a52e-13c924206320",
        "name": "Bradley Ledner",
        "title": "Human Creative Executive",
        "address": {
            "street": "7594 Mills Lock",
            "city": "North Amyaworth",
            "state": "Texas",
            "zip": "02369",
            "country": "Moldova"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/538.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ab120b58-527c-41c3-8015-25bb89bdae9d",
        "name": "Erick Wiza",
        "title": "Chief Markets Orchestrator",
        "address": {
            "street": "617 Drake Courts",
            "city": "Geraldinecester",
            "state": "South Dakota",
            "zip": "13387-3550",
            "country": "Belarus"
        },
        "avatar": "https://avatars.githubusercontent.com/u/34463921",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8e4dccc2-34f4-4829-9e70-23d1d03b75a0",
        "name": "Terry Shanahan",
        "title": "Direct Accountability Supervisor",
        "address": {
            "street": "3389 Patricia Cliff",
            "city": "Fort Collins",
            "state": "New York",
            "zip": "51314",
            "country": "Bermuda"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/98.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "be67331c-7b27-475a-9cd8-45424120f5f1",
        "name": "Simon Turcotte-Rowe",
        "title": "Chief Group Consultant",
        "address": {
            "street": "40536 Bonita Hill",
            "city": "West Shannon",
            "state": "New Jersey",
            "zip": "80776-7813",
            "country": "Mauritania"
        },
        "avatar": "https://avatars.githubusercontent.com/u/45507740",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c24f36f0-72f9-4ae9-a6aa-213446ec0a78",
        "name": "Darrell Dooley",
        "title": "Regional Brand Producer",
        "address": {
            "street": "103 Rhett Pass",
            "city": "Rempelchester",
            "state": "Connecticut",
            "zip": "66021",
            "country": "Taiwan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/605.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b630ae1a-2b3d-4d7b-8ebd-a74eef0d9422",
        "name": "Marta Reynolds-Beier",
        "title": "Forward Identity Representative",
        "address": {
            "street": "748 Rowe Route",
            "city": "West Alishamouth",
            "state": "Ohio",
            "zip": "34202",
            "country": "Grenada"
        },
        "avatar": "https://avatars.githubusercontent.com/u/26490841",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "bf7aa458-8418-41f6-9613-aadebc721d41",
        "name": "Jessica Hilll",
        "title": "Human Directives Consultant",
        "address": {
            "street": "1128 Jenkins Junction",
            "city": "Fort Freeda",
            "state": "Arizona",
            "zip": "13357",
            "country": "Turks and Caicos Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/632.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a10e6cb2-94b4-43c9-adb1-9bf68f00ce05",
        "name": "Leonard Terry",
        "title": "Human Tactics Officer",
        "address": {
            "street": "383 Keeling Expressway",
            "city": "North Orrinstad",
            "state": "Mississippi",
            "zip": "68459",
            "country": "Barbados"
        },
        "avatar": "https://avatars.githubusercontent.com/u/22701048",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "bca48d2d-0c21-4853-bd0b-69afb864e329",
        "name": "Laurence Zieme MD",
        "title": "Corporate Brand Orchestrator",
        "address": {
            "street": "91795 Eino Points",
            "city": "Lake Aaronburgh",
            "state": "Michigan",
            "zip": "75971",
            "country": "Taiwan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/50644583",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "80c786a8-19df-4731-bc7f-6bcfaa27493a",
        "name": "Lonnie Armstrong",
        "title": "Future Metrics Agent",
        "address": {
            "street": "96123 Brody Squares",
            "city": "Marcelside",
            "state": "New Hampshire",
            "zip": "93526-4625",
            "country": "Djibouti"
        },
        "avatar": "https://avatars.githubusercontent.com/u/43578550",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c39253d9-e1f1-4f47-b84f-43d451293908",
        "name": "Juana Reichel-Wehner",
        "title": "Customer Group Technician",
        "address": {
            "street": "41884 Connelly Rue",
            "city": "Kirkland",
            "state": "Nevada",
            "zip": "31248",
            "country": "Martinique"
        },
        "avatar": "https://avatars.githubusercontent.com/u/64105398",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e545a7ee-e7e6-42d0-8123-67b1537bf6ac",
        "name": "Florence Wilkinson",
        "title": "International Metrics Agent",
        "address": {
            "street": "337 Casimer Route",
            "city": "West Tillmanshire",
            "state": "North Carolina",
            "zip": "88098",
            "country": "Cameroon"
        },
        "avatar": "https://avatars.githubusercontent.com/u/2029103",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "16bd7dcb-6a56-4a4d-b606-9d8c61c4f4e2",
        "name": "Dr. Joy Corkery",
        "title": "Human Creative Agent",
        "address": {
            "street": "507 Feeney Lakes",
            "city": "VonRuedenton",
            "state": "New Jersey",
            "zip": "27576",
            "country": "Cuba"
        },
        "avatar": "https://avatars.githubusercontent.com/u/18152980",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5f7bbbe6-e250-4b9f-96bc-fd5809e54832",
        "name": "Dr. Louis Bechtelar",
        "title": "Senior Implementation Officer",
        "address": {
            "street": "810 Jerod Ridges",
            "city": "Encinitas",
            "state": "Kentucky",
            "zip": "86527",
            "country": "Mozambique"
        },
        "avatar": "https://avatars.githubusercontent.com/u/82565174",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0ddbd8fa-a1a1-4a2b-84a3-865a0a96f7b2",
        "name": "Timmy Gusikowski",
        "title": "Direct Mobility Agent",
        "address": {
            "street": "44003 Wyman Plain",
            "city": "Port Ken",
            "state": "Oregon",
            "zip": "77529-6519",
            "country": "Honduras"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/83.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d4a3f2d6-db84-434c-aee4-00fb758e8351",
        "name": "Rosie Mosciski",
        "title": "Future Program Officer",
        "address": {
            "street": "570 Antonia Rapids",
            "city": "Lake Dionville",
            "state": "Georgia",
            "zip": "48327-0526",
            "country": "Albania"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/299.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "677765b5-dd81-4139-923d-3689d7d49d17",
        "name": "Alex Weimann DVM",
        "title": "Internal Quality Liaison",
        "address": {
            "street": "7061 Marlon Gardens",
            "city": "Lake Mathildebury",
            "state": "Missouri",
            "zip": "73132",
            "country": "French Polynesia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/87656876",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "54d09bcc-6023-4578-90ba-2e73a1ade764",
        "name": "Devin Mayert",
        "title": "Investor Mobility Manager",
        "address": {
            "street": "521 Leonardo Camp",
            "city": "West Devin",
            "state": "New Jersey",
            "zip": "29796-4955",
            "country": "Thailand"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/541.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9ca97427-7872-4d98-9e19-57ce6256586a",
        "name": "Jessica Kiehn Jr.",
        "title": "Forward Research Specialist",
        "address": {
            "street": "17890 Jalon Cliffs",
            "city": "Schenectady",
            "state": "Oregon",
            "zip": "19005-1098",
            "country": "Slovakia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1240.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8b224cdc-7fbd-4c68-807a-291c9f1af70b",
        "name": "Marco Hansen",
        "title": "International Group Executive",
        "address": {
            "street": "76990 Alexzander Rue",
            "city": "North Idellastead",
            "state": "South Dakota",
            "zip": "14066-6163",
            "country": "Kiribati"
        },
        "avatar": "https://avatars.githubusercontent.com/u/66701234",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9bfef5d3-5da3-44b9-864b-e3850b1d7ab3",
        "name": "Ms. Juana Hermann",
        "title": "Legacy Branding Liaison",
        "address": {
            "street": "965 Graham Junction",
            "city": "Cutler Bay",
            "state": "Delaware",
            "zip": "29306-0323",
            "country": "Czechia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/202.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "55965f26-2357-48d5-8253-3c1e7413ebf8",
        "name": "Dr. Pat Bosco MD",
        "title": "Legacy Branding Specialist",
        "address": {
            "street": "821 Strosin Field",
            "city": "North Cristinacester",
            "state": "New Hampshire",
            "zip": "04957-5400",
            "country": "Tunisia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/78517161",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "58c224e7-86c9-481c-820c-58eb5846f465",
        "name": "Guadalupe Lindgren",
        "title": "Global Optimization Coordinator",
        "address": {
            "street": "729 O'Keefe Cove",
            "city": "Port Bonniecester",
            "state": "West Virginia",
            "zip": "85580",
            "country": "Bouvet Island"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1051.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b4f32083-4f44-4e18-9257-950a55b83475",
        "name": "Elizabeth Sporer",
        "title": "Future Intranet Representative",
        "address": {
            "street": "810 Beatty Rest",
            "city": "Zachariahshire",
            "state": "Wyoming",
            "zip": "15211",
            "country": "Solomon Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/51.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0ee76003-08dd-46b4-b5ec-a9d1eea10d90",
        "name": "Jody Nader-Kuvalis III",
        "title": "Investor Interactions Producer",
        "address": {
            "street": "5410 Botsford Park",
            "city": "Oceanside",
            "state": "Vermont",
            "zip": "55813-8054",
            "country": "Turkey"
        },
        "avatar": "https://avatars.githubusercontent.com/u/70086538",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0d249751-8392-48bd-9804-b1b18501d7ba",
        "name": "Roosevelt Bashirian",
        "title": "International Usability Specialist",
        "address": {
            "street": "173 Bednar Estates",
            "city": "Redmond",
            "state": "Wyoming",
            "zip": "73425",
            "country": "Pitcairn Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/115.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ada4aa21-636b-4d1a-8a69-991bff2d2a71",
        "name": "Willis Bauch",
        "title": "Product Identity Specialist",
        "address": {
            "street": "39360 Garnett Gateway",
            "city": "Pacochafurt",
            "state": "Maryland",
            "zip": "16577",
            "country": "Iceland"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/828.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8c7ff8ad-f284-4a09-8476-420946734436",
        "name": "Joyce Huel",
        "title": "District Directives Coordinator",
        "address": {
            "street": "98813 Terrell Shoals",
            "city": "East Kade",
            "state": "North Carolina",
            "zip": "48953",
            "country": "Egypt"
        },
        "avatar": "https://avatars.githubusercontent.com/u/94051775",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b10377ef-b2d0-4bcc-a63b-ef212a087c13",
        "name": "Dustin Turcotte",
        "title": "Internal Brand Supervisor",
        "address": {
            "street": "2153 Hahn Fords",
            "city": "Thornton",
            "state": "Utah",
            "zip": "56754",
            "country": "Virgin Islands, British"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/779.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e7cfdcb4-e260-47b9-b9fb-caff13dd5138",
        "name": "Mr. Terrance Wilkinson",
        "title": "Product Solutions Director",
        "address": {
            "street": "834 Stanton Mills",
            "city": "Ernserfield",
            "state": "West Virginia",
            "zip": "64484",
            "country": "Mongolia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/89418134",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e08d29fd-6fa9-4882-ad3f-757ff2661fcc",
        "name": "Mindy Ruecker",
        "title": "Future Research Associate",
        "address": {
            "street": "2839 Zieme Tunnel",
            "city": "North Alexandraport",
            "state": "Oklahoma",
            "zip": "22055",
            "country": "United Kingdom"
        },
        "avatar": "https://avatars.githubusercontent.com/u/17879209",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "820bdc06-11f0-49f5-a1fe-d79e446b9fbd",
        "name": "April Cormier",
        "title": "District Infrastructure Engineer",
        "address": {
            "street": "539 Lowe Bypass",
            "city": "Halvorsoncester",
            "state": "South Dakota",
            "zip": "41790",
            "country": "Uruguay"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/759.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "95a2683f-169f-4f4f-88c0-053aea47fa32",
        "name": "Thelma Jenkins",
        "title": "Global Response Supervisor",
        "address": {
            "street": "93460 Forest Via",
            "city": "Kuhicport",
            "state": "North Dakota",
            "zip": "75947-3578",
            "country": "Denmark"
        },
        "avatar": "https://avatars.githubusercontent.com/u/17909568",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5f12103b-f8d1-4caa-8f18-dd3e0d3dadfb",
        "name": "Natalie Lang IV",
        "title": "Corporate Quality Designer",
        "address": {
            "street": "5008 Hayden Rue",
            "city": "East Edgarfurt",
            "state": "Oklahoma",
            "zip": "73122-5005",
            "country": "Switzerland"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1135.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c1fe87ec-4ba4-489e-aff4-408c9ce3d4e8",
        "name": "Alvin Kuhlman",
        "title": "Global Implementation Technician",
        "address": {
            "street": "752 Miller Cliff",
            "city": "Legrosville",
            "state": "West Virginia",
            "zip": "25913-0712",
            "country": "Liberia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/824.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2c520500-cd2c-4327-b21a-ce78a4b2c062",
        "name": "Henry Jenkins",
        "title": "Forward Program Director",
        "address": {
            "street": "345 Lesley Brooks",
            "city": "Kyleborough",
            "state": "Michigan",
            "zip": "22775",
            "country": "Luxembourg"
        },
        "avatar": "https://avatars.githubusercontent.com/u/6067299",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d9dc010f-eb00-4285-85c8-bd88f9559d87",
        "name": "Winifred Swaniawski",
        "title": "Human Metrics Engineer",
        "address": {
            "street": "9914 Gwen Station",
            "city": "Deondreburgh",
            "state": "Connecticut",
            "zip": "30765",
            "country": "Syrian Arab Republic"
        },
        "avatar": "https://avatars.githubusercontent.com/u/894199",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d2400db1-9a12-492b-9265-6d55ea412823",
        "name": "Jaime Ryan",
        "title": "Human Integration Executive",
        "address": {
            "street": "9594 Timothy Manors",
            "city": "Collinsfield",
            "state": "Tennessee",
            "zip": "15454",
            "country": "Kyrgyz Republic"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/364.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "49296102-951b-4918-8074-f07acd90b917",
        "name": "Lydia Moen",
        "title": "Global Creative Orchestrator",
        "address": {
            "street": "578 Ward Ville",
            "city": "Haneberg",
            "state": "Iowa",
            "zip": "40205-5699",
            "country": "Bhutan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/98105262",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7f4f011d-fd98-4ff0-a58d-af9aa2e2f737",
        "name": "Irma Toy",
        "title": "Lead Security Designer",
        "address": {
            "street": "12257 Hoppe Way",
            "city": "Maggiofort",
            "state": "New Jersey",
            "zip": "23353-7634",
            "country": "Faroe Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/552.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "524ed61b-0849-412d-80fb-a7273675a18f",
        "name": "Terrell O'Kon",
        "title": "Internal Directives Representative",
        "address": {
            "street": "70053 Armstrong Landing",
            "city": "Visalia",
            "state": "Massachusetts",
            "zip": "91282-6769",
            "country": "Equatorial Guinea"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/733.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "77c06af8-56c9-4468-849f-412f242081f7",
        "name": "Dr. Oscar Breitenberg",
        "title": "Product Directives Officer",
        "address": {
            "street": "367 Marquardt Route",
            "city": "East Augustine",
            "state": "Delaware",
            "zip": "64747",
            "country": "Ethiopia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/10521558",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c2fa330a-a5c5-47e8-b9a6-42f2c0b3fc20",
        "name": "Santos Altenwerth",
        "title": "Human Paradigm Facilitator",
        "address": {
            "street": "92705 Rau Shoal",
            "city": "Vaughnboro",
            "state": "South Carolina",
            "zip": "95994-8016",
            "country": "Guadeloupe"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1231.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9b8c4da3-1c54-4c98-8710-e0d9c9604794",
        "name": "Eduardo Green Sr.",
        "title": "Central Accounts Strategist",
        "address": {
            "street": "396 Brenden Green",
            "city": "West Anastacioport",
            "state": "Texas",
            "zip": "80741-6823",
            "country": "Martinique"
        },
        "avatar": "https://avatars.githubusercontent.com/u/13433363",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e87e3a21-16ca-4785-94c0-f1c5a3792732",
        "name": "Claude Gislason",
        "title": "Lead Creative Associate",
        "address": {
            "street": "3884 Cortez Inlet",
            "city": "Dachbury",
            "state": "North Carolina",
            "zip": "98783",
            "country": "Ethiopia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/929.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "30eb2c23-ea28-4d4b-8e4c-d13807b08893",
        "name": "Roberta Pagac",
        "title": "Legacy Usability Designer",
        "address": {
            "street": "933 Frida Lane",
            "city": "Valentinchester",
            "state": "Montana",
            "zip": "45627-2717",
            "country": "North Macedonia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/44604867",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "49fdc25f-d475-4464-ac01-298bd781c3d6",
        "name": "Harold Fadel",
        "title": "Dynamic Usability Coordinator",
        "address": {
            "street": "41563 Keaton Views",
            "city": "Stantonville",
            "state": "Tennessee",
            "zip": "37261-0673",
            "country": "Mauritania"
        },
        "avatar": "https://avatars.githubusercontent.com/u/25336472",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "686b562b-dad1-4b76-aede-9ea68a642134",
        "name": "Gregg Lynch",
        "title": "Human Accounts Associate",
        "address": {
            "street": "5797 Euna Place",
            "city": "Angelochester",
            "state": "Tennessee",
            "zip": "05254",
            "country": "Austria"
        },
        "avatar": "https://avatars.githubusercontent.com/u/56245361",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3007ac74-b13a-47c1-8219-9de5f23e5712",
        "name": "Jan Jakubowski",
        "title": "Global Program Consultant",
        "address": {
            "street": "41041 Mitchell Burgs",
            "city": "Fort Kaleyville",
            "state": "Nevada",
            "zip": "06847-8762",
            "country": "Montenegro"
        },
        "avatar": "https://avatars.githubusercontent.com/u/15588373",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0656c437-6142-4cbd-b40d-8bea38bf4a0f",
        "name": "Cassandra Treutel",
        "title": "Global Interactions Developer",
        "address": {
            "street": "85208 Jordy Summit",
            "city": "Lake Breannacester",
            "state": "Connecticut",
            "zip": "58256",
            "country": "Isle of Man"
        },
        "avatar": "https://avatars.githubusercontent.com/u/72615177",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "dfdf6f13-4624-4ba5-a529-5d2046bd3749",
        "name": "Lindsay Crist",
        "title": "Internal Integration Technician",
        "address": {
            "street": "1707 Tromp Ferry",
            "city": "Douglasland",
            "state": "Nevada",
            "zip": "47157",
            "country": "Mauritania"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/997.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "282571c9-20f8-41cb-8119-3e872fc0806c",
        "name": "Theresa Dietrich-Ritchie",
        "title": "Future Division Executive",
        "address": {
            "street": "79236 Jakob Avenue",
            "city": "Sanfordmouth",
            "state": "Arkansas",
            "zip": "53166-0525",
            "country": "Cayman Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/3980113",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "885b1e43-af11-4458-bf70-1b8af49692eb",
        "name": "Claude Glover",
        "title": "Senior Configuration Specialist",
        "address": {
            "street": "138 Abbott Gardens",
            "city": "Lake Garfieldview",
            "state": "Michigan",
            "zip": "61919",
            "country": "France"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/749.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7bab885b-bc8d-43e7-9f96-6b2aa983de7a",
        "name": "Dustin Torphy",
        "title": "Central Configuration Supervisor",
        "address": {
            "street": "3881 Sarina Turnpike",
            "city": "New Alvena",
            "state": "West Virginia",
            "zip": "98156",
            "country": "Somalia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/31.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "87ed2c1e-16da-479a-b2e7-f12a0e6d41e7",
        "name": "Mrs. Isabel Weber",
        "title": "Regional Metrics Facilitator",
        "address": {
            "street": "5216 Arlie Corners",
            "city": "East Irma",
            "state": "North Carolina",
            "zip": "29956-5049",
            "country": "Argentina"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/498.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "29677c37-5e14-46cc-b4a8-f031e8755240",
        "name": "Stephanie Schaefer",
        "title": "Human Quality Representative",
        "address": {
            "street": "7572 Elvis Brook",
            "city": "North Morris",
            "state": "Massachusetts",
            "zip": "93127",
            "country": "Netherlands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/524.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "06a1b05f-4156-4730-b676-46e220813d7b",
        "name": "Claire Boehm",
        "title": "National Implementation Agent",
        "address": {
            "street": "3403 Legros Locks",
            "city": "North Yasmine",
            "state": "Arizona",
            "zip": "72533-2501",
            "country": "South Georgia and the South Sandwich Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/19580365",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "096ec479-f4ee-4c28-af22-057a23c71e53",
        "name": "Spencer Simonis",
        "title": "Regional Infrastructure Representative",
        "address": {
            "street": "8093 Kuphal Spring",
            "city": "South Amiyatown",
            "state": "Missouri",
            "zip": "87717",
            "country": "Thailand"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/425.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "25eae855-ba80-42ff-ba36-cad25ca766a8",
        "name": "Virginia Turcotte",
        "title": "Legacy Program Analyst",
        "address": {
            "street": "25550 Cassin Fall",
            "city": "Tryciaberg",
            "state": "Montana",
            "zip": "58772-4910",
            "country": "Seychelles"
        },
        "avatar": "https://avatars.githubusercontent.com/u/42344555",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c3e64094-ede7-417f-8152-ee861b0b7974",
        "name": "Jacqueline Batz",
        "title": "Senior Research Producer",
        "address": {
            "street": "443 Zboncak Key",
            "city": "Edaland",
            "state": "Vermont",
            "zip": "12766",
            "country": "Macao"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/451.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "62293020-1ab3-441e-8a8a-c626eed9ffb5",
        "name": "Jeannette Stracke",
        "title": "Internal Metrics Developer",
        "address": {
            "street": "77019 Sanford Cove",
            "city": "Goodyear",
            "state": "Kansas",
            "zip": "16585-1150",
            "country": "Pitcairn Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/95764278",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5d26cb17-d839-4f18-bfa4-88a38bb4e3b4",
        "name": "Mrs. Rita Stroman-Kovacek",
        "title": "Future Operations Administrator",
        "address": {
            "street": "205 Dillan Harbor",
            "city": "Alburgh",
            "state": "Alaska",
            "zip": "60618",
            "country": "Iran"
        },
        "avatar": "https://avatars.githubusercontent.com/u/48972590",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "92d745cd-e35e-43ad-ba81-a6e3c07d7853",
        "name": "Courtney Roob",
        "title": "Lead Factors Engineer",
        "address": {
            "street": "25589 Danielle Village",
            "city": "Pollichville",
            "state": "North Dakota",
            "zip": "25987-0425",
            "country": "Netherlands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/250.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b0f01733-daec-4c92-b8e9-f9f2c5315ae5",
        "name": "Joseph Blanda I",
        "title": "Human Branding Facilitator",
        "address": {
            "street": "2489 Elda Parkway",
            "city": "North Rozellastead",
            "state": "Missouri",
            "zip": "34522",
            "country": "Sudan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/772.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a0e5adca-39f9-4f43-8deb-f8ad34c5e20e",
        "name": "Tricia Swaniawski",
        "title": "Forward Assurance Architect",
        "address": {
            "street": "2423 Hyatt Mount",
            "city": "Parker",
            "state": "Texas",
            "zip": "39846-0594",
            "country": "Somalia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/33430785",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "10658371-3eef-4715-9e15-b210e263104f",
        "name": "Everett Wiza",
        "title": "Direct Configuration Associate",
        "address": {
            "street": "60307 Morar Wells",
            "city": "Padbergfield",
            "state": "Colorado",
            "zip": "55682-8420",
            "country": "Qatar"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/312.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "44f1b095-2628-4e96-991d-2d658586af1e",
        "name": "Craig Price",
        "title": "Internal Communications Liaison",
        "address": {
            "street": "46446 Langworth Ramp",
            "city": "Port Kayden",
            "state": "Michigan",
            "zip": "79579",
            "country": "Georgia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/663.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f89e3129-ebf7-4e02-a5ed-91724cd5fe7e",
        "name": "Rodolfo Brakus",
        "title": "Future Marketing Liaison",
        "address": {
            "street": "6560 Walker Port",
            "city": "Fort Sophia",
            "state": "Washington",
            "zip": "74475",
            "country": "Bonaire, Sint Eustatius and Saba"
        },
        "avatar": "https://avatars.githubusercontent.com/u/63060628",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "90c8e4b1-2bc3-4148-9d13-833522587c00",
        "name": "Bennie Armstrong",
        "title": "Investor Infrastructure Officer",
        "address": {
            "street": "7440 Stroman Skyway",
            "city": "Port Carolinechester",
            "state": "Alabama",
            "zip": "97699-4651",
            "country": "Latvia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/192.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c478c969-5429-4aa4-80e0-76a4ef18ffb7",
        "name": "Kate O'Hara",
        "title": "Investor Tactics Strategist",
        "address": {
            "street": "63901 Graham Parkway",
            "city": "Stromanstead",
            "state": "Alabama",
            "zip": "25515",
            "country": "Indonesia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/41206392",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "215e6718-e640-41b9-885c-de1781160755",
        "name": "Wallace Howell-Runolfsson",
        "title": "Direct Paradigm Facilitator",
        "address": {
            "street": "2551 Rowe Heights",
            "city": "Alpharetta",
            "state": "Florida",
            "zip": "37311",
            "country": "Brunei Darussalam"
        },
        "avatar": "https://avatars.githubusercontent.com/u/20780922",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a40313d9-f936-45ee-953b-cf263f8b88f3",
        "name": "June Fahey",
        "title": "Regional Interactions Representative",
        "address": {
            "street": "1480 Satterfield Forks",
            "city": "Talonshire",
            "state": "North Dakota",
            "zip": "93796-9693",
            "country": "Christmas Island"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1123.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9e985f15-75d8-4535-b6cb-e2cafa71c516",
        "name": "Paulette Gottlieb",
        "title": "Future Operations Analyst",
        "address": {
            "street": "221 Denesik Isle",
            "city": "West Emmie",
            "state": "Oklahoma",
            "zip": "05615",
            "country": "Ghana"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/780.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "dbd9d52a-3aee-42e1-8d79-1f4f6274846a",
        "name": "William Feil MD",
        "title": "International Quality Designer",
        "address": {
            "street": "37720 Flatley Summit",
            "city": "Geovanyshire",
            "state": "Michigan",
            "zip": "60496",
            "country": "French Guiana"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/567.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c0889d1d-be40-451e-a845-8f130b1df2da",
        "name": "Courtney Mohr",
        "title": "Product Applications Administrator",
        "address": {
            "street": "737 Stark Valleys",
            "city": "Laishaborough",
            "state": "Louisiana",
            "zip": "27230-3859",
            "country": "Belize"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/665.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1c1a8f9a-ff6f-4f62-a55e-b3214bc7df62",
        "name": "Tammy Hudson",
        "title": "Chief Metrics Planner",
        "address": {
            "street": "67124 Delpha Burgs",
            "city": "Fort Marianne",
            "state": "Indiana",
            "zip": "20717",
            "country": "Tanzania"
        },
        "avatar": "https://avatars.githubusercontent.com/u/93189165",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7bbefe84-f7b3-4f23-a937-319fc8f1e59f",
        "name": "Susan Wilkinson",
        "title": "National Response Agent",
        "address": {
            "street": "1142 Abner Crescent",
            "city": "North Baileeport",
            "state": "Pennsylvania",
            "zip": "86666-9630",
            "country": "Vietnam"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/813.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e0caeb8b-7748-4799-a4a1-3b59d1397f5f",
        "name": "Marshall Heaney",
        "title": "Central Accountability Technician",
        "address": {
            "street": "5525 Raul Inlet",
            "city": "O'Reillyburgh",
            "state": "Maine",
            "zip": "51258-4407",
            "country": "Venezuela"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/333.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "266340c3-e912-4498-a5a3-8237dcd981b9",
        "name": "Brendan Morissette",
        "title": "Human Division Coordinator",
        "address": {
            "street": "27939 Marvin Summit",
            "city": "East Doyle",
            "state": "Arizona",
            "zip": "02009-6400",
            "country": "Jordan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/38861182",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d9c30aa2-112b-4e2b-8467-2e3b2f0d098a",
        "name": "Mark Metz",
        "title": "National Data Executive",
        "address": {
            "street": "1414 Cecelia Gateway",
            "city": "North Bretstead",
            "state": "Nebraska",
            "zip": "41680-0443",
            "country": "Rwanda"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/136.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "70910ee4-e442-4458-8f98-9ed83e0320fd",
        "name": "Joann Altenwerth",
        "title": "Lead Directives Officer",
        "address": {
            "street": "4415 Annamae Glens",
            "city": "North Ericka",
            "state": "Kansas",
            "zip": "94726",
            "country": "Ghana"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/903.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "dc7dc6f6-7239-47a5-bb83-d40688362c1f",
        "name": "Daniel Luettgen",
        "title": "Legacy Marketing Director",
        "address": {
            "street": "28663 Christian Freeway",
            "city": "Earnestineborough",
            "state": "Washington",
            "zip": "94952-7544",
            "country": "British Indian Ocean Territory (Chagos Archipelago)"
        },
        "avatar": "https://avatars.githubusercontent.com/u/31570205",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "491a3246-d3a6-4a74-a38e-dfca13f69f8d",
        "name": "Marcella Gutkowski",
        "title": "Investor Assurance Specialist",
        "address": {
            "street": "245 Edwin Center",
            "city": "Fort Marilynestad",
            "state": "California",
            "zip": "89800-2822",
            "country": "Palestine"
        },
        "avatar": "https://avatars.githubusercontent.com/u/18814501",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "867c7c14-05ac-4169-bc1a-542d887dc8db",
        "name": "Joanne Marquardt DDS",
        "title": "Product Identity Coordinator",
        "address": {
            "street": "4943 Gillian Parkway",
            "city": "Fort Alysafurt",
            "state": "South Carolina",
            "zip": "75355",
            "country": "Lesotho"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/529.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "03030bf2-2d4c-4262-a3c4-350eacfc526c",
        "name": "Lydia Bednar",
        "title": "District Optimization Facilitator",
        "address": {
            "street": "71431 Molly View",
            "city": "Labadieboro",
            "state": "Georgia",
            "zip": "94004-7653",
            "country": "Kyrgyz Republic"
        },
        "avatar": "https://avatars.githubusercontent.com/u/70207293",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "418ede63-eea0-420f-80af-3be7bed1edb0",
        "name": "Louis Raynor",
        "title": "National Paradigm Associate",
        "address": {
            "street": "9961 Wisoky Expressway",
            "city": "East Mustafaworth",
            "state": "New York",
            "zip": "15838-1561",
            "country": "Saint Barthelemy"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/515.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2589e490-1246-4216-b2f8-6cb66e8bb035",
        "name": "Mildred Keeling",
        "title": "Forward Communications Designer",
        "address": {
            "street": "12350 Zulauf Square",
            "city": "Caspershire",
            "state": "Tennessee",
            "zip": "73076",
            "country": "Kenya"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/230.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fc34dd16-de0a-47cd-993e-5f51c043ad76",
        "name": "Mr. Marion Quitzon",
        "title": "Future Markets Strategist",
        "address": {
            "street": "4705 Heidi Shores",
            "city": "Utica",
            "state": "New Hampshire",
            "zip": "49482-3604",
            "country": "Panama"
        },
        "avatar": "https://avatars.githubusercontent.com/u/924424",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0b786033-080f-4b35-bb49-7491fcacc348",
        "name": "Felicia Goldner",
        "title": "Direct Accountability Engineer",
        "address": {
            "street": "569 Nova Forest",
            "city": "Savanahfield",
            "state": "Maine",
            "zip": "86405",
            "country": "New Caledonia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/42652097",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3b0ec028-3843-4cae-af17-50b623610037",
        "name": "Rene Graham-McCullough",
        "title": "Forward Data Engineer",
        "address": {
            "street": "28034 Francis Hills",
            "city": "West Darianstead",
            "state": "Utah",
            "zip": "05625",
            "country": "Iran"
        },
        "avatar": "https://avatars.githubusercontent.com/u/1479477",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8cbac537-cce2-441e-9453-ff5f5773eb2f",
        "name": "Dianna Ernser",
        "title": "Human Research Strategist",
        "address": {
            "street": "109 Chyna Burg",
            "city": "Majorside",
            "state": "Utah",
            "zip": "87390-0811",
            "country": "Maldives"
        },
        "avatar": "https://avatars.githubusercontent.com/u/10348074",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c153a6d7-9f1f-474b-8751-c60859f0e698",
        "name": "Hope Fisher-Wyman",
        "title": "National Infrastructure Analyst",
        "address": {
            "street": "31223 Desmond Way",
            "city": "Brekkecester",
            "state": "California",
            "zip": "62637-1171",
            "country": "Canada"
        },
        "avatar": "https://avatars.githubusercontent.com/u/65804301",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f2c34447-2f85-4d67-a1a8-1fe1fd531224",
        "name": "Ramiro Sauer",
        "title": "Chief Operations Officer",
        "address": {
            "street": "23456 Vallie Gateway",
            "city": "Hilpertport",
            "state": "Ohio",
            "zip": "02052-5662",
            "country": "French Southern Territories"
        },
        "avatar": "https://avatars.githubusercontent.com/u/57925199",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b66e5b7f-d43b-47d7-a8c6-f3dc96a877a7",
        "name": "Miss Stephanie Feest",
        "title": "District Brand Developer",
        "address": {
            "street": "625 Maximillia Lake",
            "city": "Opalcester",
            "state": "North Carolina",
            "zip": "01925-7893",
            "country": "Romania"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/119.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "368bee86-abe2-46e0-9269-543f45e99448",
        "name": "Levi Howell",
        "title": "Lead Security Consultant",
        "address": {
            "street": "8881 Klocko Summit",
            "city": "Niagara Falls",
            "state": "Vermont",
            "zip": "58854-0398",
            "country": "Rwanda"
        },
        "avatar": "https://avatars.githubusercontent.com/u/96220131",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d73cef1b-768e-477a-9cb6-e23044adf8a4",
        "name": "Melinda Schimmel",
        "title": "Internal Response Supervisor",
        "address": {
            "street": "9508 Bradtke Stravenue",
            "city": "Hermanshire",
            "state": "Washington",
            "zip": "09891-3351",
            "country": "Aland Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/8420702",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5716c3fa-1c3b-4e27-ae77-10d6a54c5996",
        "name": "Wilbur Bogan",
        "title": "District Functionality Assistant",
        "address": {
            "street": "982 Orrin Garden",
            "city": "Port Willis",
            "state": "Kansas",
            "zip": "22430",
            "country": "North Macedonia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/975.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "cc9d2a75-3291-48d0-87bc-aa42f7f2bdb3",
        "name": "Erika Fisher",
        "title": "Future Markets Administrator",
        "address": {
            "street": "821 Morton Court",
            "city": "New Elmirafort",
            "state": "Washington",
            "zip": "90948-3257",
            "country": "Botswana"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/718.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1f992c9c-0d1b-40ab-95d4-8f607aa2a386",
        "name": "Derrick Cremin",
        "title": "Investor Markets Engineer",
        "address": {
            "street": "90427 O'Conner Underpass",
            "city": "Beattyview",
            "state": "Virginia",
            "zip": "81592",
            "country": "Tanzania"
        },
        "avatar": "https://avatars.githubusercontent.com/u/55882984",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c69a1b94-afc8-41f6-bd52-3d920f2514f5",
        "name": "Molly Reilly",
        "title": "Direct Quality Facilitator",
        "address": {
            "street": "57158 Makenzie Hill",
            "city": "Sipesmouth",
            "state": "North Dakota",
            "zip": "82563-4743",
            "country": "Bouvet Island"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/825.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "15f874d6-7b37-49b2-a03d-1fdae6a1890a",
        "name": "Veronica Breitenberg",
        "title": "National Factors Officer",
        "address": {
            "street": "8182 Macie Knoll",
            "city": "South Hill",
            "state": "New Hampshire",
            "zip": "07505",
            "country": "Aruba"
        },
        "avatar": "https://avatars.githubusercontent.com/u/35677220",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fb37b431-e999-49b7-9674-dff701b52a58",
        "name": "Ronnie Hamill",
        "title": "Corporate Optimization Producer",
        "address": {
            "street": "79440 Makenna Falls",
            "city": "East Arelychester",
            "state": "Washington",
            "zip": "40864-0039",
            "country": "Japan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1184.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ff653469-1e06-48d9-b8c3-a483315d6c7e",
        "name": "Joshua Rutherford",
        "title": "Global Metrics Orchestrator",
        "address": {
            "street": "5346 MacGyver Villages",
            "city": "Fionafort",
            "state": "New Hampshire",
            "zip": "97853",
            "country": "Saint Kitts and Nevis"
        },
        "avatar": "https://avatars.githubusercontent.com/u/4475477",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1f349721-2b8f-4d10-b13f-9c8695879f92",
        "name": "Paul Mohr",
        "title": "National Paradigm Officer",
        "address": {
            "street": "9468 Prohaska Mills",
            "city": "North Shaneville",
            "state": "California",
            "zip": "90666",
            "country": "Zimbabwe"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1118.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "10487f81-0edd-4831-bbb3-a7a1fced55c7",
        "name": "Kristin Schmeler",
        "title": "District Usability Engineer",
        "address": {
            "street": "5408 Juwan Ridge",
            "city": "Camarillo",
            "state": "South Carolina",
            "zip": "75677",
            "country": "Gibraltar"
        },
        "avatar": "https://avatars.githubusercontent.com/u/719092",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4994f7e0-a6ad-4caa-bd47-1f93d24c5f87",
        "name": "Karl Moore",
        "title": "Internal Implementation Coordinator",
        "address": {
            "street": "830 Berge Mill",
            "city": "Lake Sandy",
            "state": "New Mexico",
            "zip": "62256-0005",
            "country": "North Macedonia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/19671555",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "cd16d7c4-b01b-45e7-8eca-c635d3fe7903",
        "name": "Claire Quitzon",
        "title": "Forward Creative Representative",
        "address": {
            "street": "36949 Bogan Haven",
            "city": "Port Mayebury",
            "state": "Montana",
            "zip": "61769-0502",
            "country": "Central African Republic"
        },
        "avatar": "https://avatars.githubusercontent.com/u/79064123",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "771547d3-0d60-4369-be55-2682fd24d645",
        "name": "Roberto Dare IV",
        "title": "National Communications Producer",
        "address": {
            "street": "637 Kyra Way",
            "city": "Maggiostad",
            "state": "Ohio",
            "zip": "50395",
            "country": "Maldives"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/989.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4728d5b9-97f2-40e2-ac36-1f84f4bb225f",
        "name": "Wanda Cartwright",
        "title": "Chief Implementation Executive",
        "address": {
            "street": "176 Ankunding Wells",
            "city": "East Geoffreycester",
            "state": "Texas",
            "zip": "06582-6442",
            "country": "Suriname"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/275.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "89bfbfad-1518-4637-9779-881b0289c239",
        "name": "Oscar Hudson",
        "title": "Regional Data Developer",
        "address": {
            "street": "129 Harris Forest",
            "city": "Port Armanichester",
            "state": "New Mexico",
            "zip": "51448-2038",
            "country": "Colombia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1103.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "da476bb4-fcf2-482d-8cd6-23b99e447200",
        "name": "Wallace Goyette",
        "title": "International Program Agent",
        "address": {
            "street": "2269 Faye Shore",
            "city": "Kacimouth",
            "state": "Maine",
            "zip": "72156-6544",
            "country": "Croatia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/472.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "923a7286-50c3-4ec7-806c-d4890783b7c9",
        "name": "Wm Jenkins Sr.",
        "title": "Global Identity Designer",
        "address": {
            "street": "4770 Kemmer Union",
            "city": "Cleveland Heights",
            "state": "Kansas",
            "zip": "05290-0675",
            "country": "Tajikistan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/205.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7c56ef1e-8c7b-47dd-90bf-bc3298ebc027",
        "name": "Leland Murphy",
        "title": "Legacy Functionality Supervisor",
        "address": {
            "street": "6842 Bergnaum Mall",
            "city": "West Felixfurt",
            "state": "Arkansas",
            "zip": "68433-6273",
            "country": "Tonga"
        },
        "avatar": "https://avatars.githubusercontent.com/u/14092545",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "42ef9c03-077e-44ca-8b07-8f9106037007",
        "name": "May Bernier",
        "title": "Dynamic Applications Specialist",
        "address": {
            "street": "1457 Bernier Haven",
            "city": "Lake Kailee",
            "state": "California",
            "zip": "06697-4450",
            "country": "Palestine"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/624.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4ff9f0e6-1962-4caa-9b9d-9fe10f9e1065",
        "name": "Ms. Vera Graham",
        "title": "Investor Metrics Supervisor",
        "address": {
            "street": "15225 Ullrich Light",
            "city": "Osinskimouth",
            "state": "Wisconsin",
            "zip": "84632-1358",
            "country": "Romania"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/2.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "01ed0498-f669-41d1-91ed-63993d7cc305",
        "name": "Denise Adams",
        "title": "Legacy Group Agent",
        "address": {
            "street": "510 Therese Estates",
            "city": "South Isabelle",
            "state": "Virginia",
            "zip": "25356-0208",
            "country": "Vanuatu"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1042.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "736a3268-32fb-4799-894e-e01f99c2f841",
        "name": "Miss Marianne Kiehn",
        "title": "Human Directives Analyst",
        "address": {
            "street": "52969 Ross Forges",
            "city": "Lexusland",
            "state": "Montana",
            "zip": "78115-2189",
            "country": "Brazil"
        },
        "avatar": "https://avatars.githubusercontent.com/u/30249178",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fe4b80c7-d1f5-4219-804a-a613d4f0270c",
        "name": "Daisy Lesch",
        "title": "National Communications Strategist",
        "address": {
            "street": "12141 Gorczany Unions",
            "city": "Port Hipolito",
            "state": "New Hampshire",
            "zip": "12220-2056",
            "country": "Ethiopia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/59437944",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d0045650-5de7-4bf8-b22b-3c0d51f7cc03",
        "name": "Whitney Powlowski IV",
        "title": "District Interactions Administrator",
        "address": {
            "street": "589 Walker Underpass",
            "city": "Dariusboro",
            "state": "Minnesota",
            "zip": "75332-0609",
            "country": "Cape Verde"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/436.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "10c08a0c-e32d-4c76-87ce-e2bd1f2fbeb0",
        "name": "Amelia Thiel",
        "title": "District Solutions Technician",
        "address": {
            "street": "46918 Era Ports",
            "city": "Millcreek",
            "state": "Utah",
            "zip": "26351-9476",
            "country": "Cameroon"
        },
        "avatar": "https://avatars.githubusercontent.com/u/1457001",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "be21ce47-e1b3-4411-8ba3-9dae56575e83",
        "name": "Judith Welch",
        "title": "Product Usability Manager",
        "address": {
            "street": "181 Devon Cliffs",
            "city": "West Evansbury",
            "state": "North Carolina",
            "zip": "32641-5850",
            "country": "Falkland Islands (Malvinas)"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/779.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3ff8a1de-f179-4f00-8bfb-0c2e64f912b9",
        "name": "Ellen Grady",
        "title": "Dynamic Operations Technician",
        "address": {
            "street": "9078 Austin Fields",
            "city": "South Darienberg",
            "state": "Kentucky",
            "zip": "74084-6064",
            "country": "Guam"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/113.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3f2282ca-c7f3-4de7-8a5c-f40c8a67089f",
        "name": "Lela Hickle DDS",
        "title": "Human Factors Designer",
        "address": {
            "street": "2674 Ebert Flat",
            "city": "Carolynville",
            "state": "Delaware",
            "zip": "29357-8606",
            "country": "Singapore"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/655.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8f9fb473-304a-48e7-9fed-df9f493e0050",
        "name": "Christie Marks DVM",
        "title": "Forward Directives Administrator",
        "address": {
            "street": "306 Madaline Pass",
            "city": "West Montanafurt",
            "state": "Illinois",
            "zip": "25231-2754",
            "country": "Solomon Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/80351306",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b971ea33-7b99-4bf1-a635-d8f20fac7a1e",
        "name": "Kerry Ziemann",
        "title": "Principal Metrics Supervisor",
        "address": {
            "street": "63706 Muller Way",
            "city": "New Tiaraworth",
            "state": "Pennsylvania",
            "zip": "69341-1539",
            "country": "Spain"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/639.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "14bb829d-c1f4-4961-84ab-dfef50d3ffd1",
        "name": "Sonia Daniel",
        "title": "Legacy Accountability Orchestrator",
        "address": {
            "street": "46492 Upton Shoal",
            "city": "Dareworth",
            "state": "Indiana",
            "zip": "62387-9101",
            "country": "Cocos (Keeling) Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/913.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6a54d770-988a-4b6c-9317-c0d21f7ff0a2",
        "name": "Dean Graham-Nikolaus",
        "title": "Investor Security Technician",
        "address": {
            "street": "9014 Kelton Parkway",
            "city": "East Jamey",
            "state": "Idaho",
            "zip": "90489-5115",
            "country": "Antigua and Barbuda"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/100.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "dde4137a-2ece-4f7a-9768-54e250cb5270",
        "name": "Gene Moore",
        "title": "Human Optimization Coordinator",
        "address": {
            "street": "258 Ryan Mill",
            "city": "Port Duncanside",
            "state": "Idaho",
            "zip": "83169",
            "country": "Austria"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/385.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b8d49185-3fcc-42ad-acf5-abef10ede781",
        "name": "Ray Grady",
        "title": "Investor Group Orchestrator",
        "address": {
            "street": "7886 Olson Ports",
            "city": "South Maybell",
            "state": "Hawaii",
            "zip": "12356",
            "country": "Palau"
        },
        "avatar": "https://avatars.githubusercontent.com/u/55470867",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6a956bf7-e370-47f9-b6cd-8d95537d09ac",
        "name": "Leo Corkery",
        "title": "Chief Integration Associate",
        "address": {
            "street": "25169 Jenkins Camp",
            "city": "Redmond",
            "state": "Mississippi",
            "zip": "51983",
            "country": "Greece"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/568.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "aebc41f1-167c-43b0-a063-9dccb872b559",
        "name": "Sandy Lind",
        "title": "Forward Usability Manager",
        "address": {
            "street": "117 Glover Fords",
            "city": "Shanahanworth",
            "state": "Oklahoma",
            "zip": "20119-5531",
            "country": "Costa Rica"
        },
        "avatar": "https://avatars.githubusercontent.com/u/70672588",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6b41e587-6665-4ea8-bb19-b983dd0551d5",
        "name": "Gloria King",
        "title": "Senior Applications Associate",
        "address": {
            "street": "526 Bailey Pines",
            "city": "New Scotstad",
            "state": "Florida",
            "zip": "30404-4550",
            "country": "Maldives"
        },
        "avatar": "https://avatars.githubusercontent.com/u/4585328",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ee429cd4-f7d4-4156-8cf6-e1433418c9d9",
        "name": "Jim Towne",
        "title": "National Security Designer",
        "address": {
            "street": "2322 Carmel Shoals",
            "city": "Cummeratastad",
            "state": "Hawaii",
            "zip": "78917",
            "country": "Bolivia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/33.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f8e0812c-8ec1-4898-a482-73b5aed817dc",
        "name": "Mattie Spinka II",
        "title": "National Intranet Representative",
        "address": {
            "street": "55940 Malachi Flats",
            "city": "Worcester",
            "state": "Mississippi",
            "zip": "18742-2012",
            "country": "Turks and Caicos Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/87894754",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d842932e-b3d5-4b0f-b254-a8590c3f417f",
        "name": "Dr. Rosalie Strosin",
        "title": "Principal Response Producer",
        "address": {
            "street": "250 Kunze Divide",
            "city": "Knoxville",
            "state": "Vermont",
            "zip": "74791",
            "country": "Martinique"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/900.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5b95af8d-b2be-4a2d-9a5b-54041b52cc9e",
        "name": "Mr. Ronald Murazik",
        "title": "Forward Communications Engineer",
        "address": {
            "street": "72052 Howe River",
            "city": "West Timmothybury",
            "state": "Florida",
            "zip": "14958-4655",
            "country": "Thailand"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/526.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c6a00780-4a72-4104-bde5-0fde9e9f4bf9",
        "name": "Henrietta O'Connell",
        "title": "Human Paradigm Supervisor",
        "address": {
            "street": "583 Eusebio Pike",
            "city": "North Rickiechester",
            "state": "Texas",
            "zip": "14230-0103",
            "country": "Sierra Leone"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/617.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "42877c26-be9e-47a2-9f1f-51dbfd82ad42",
        "name": "Kevin DuBuque",
        "title": "Direct Data Coordinator",
        "address": {
            "street": "39366 Murphy Branch",
            "city": "Luehaven",
            "state": "Kentucky",
            "zip": "16532",
            "country": "Qatar"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1199.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9bb7578a-3698-49ef-a155-b3a13297372e",
        "name": "Marcia Haag",
        "title": "Investor Metrics Planner",
        "address": {
            "street": "46049 Huel Knoll",
            "city": "Haverhill",
            "state": "New Hampshire",
            "zip": "04891",
            "country": "Colombia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/65286747",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a33313c6-c588-4051-a3cd-73f98ccad073",
        "name": "Maria Larkin",
        "title": "Global Marketing Strategist",
        "address": {
            "street": "5382 Pauline Cliffs",
            "city": "Lisetteberg",
            "state": "Utah",
            "zip": "04807",
            "country": "Cuba"
        },
        "avatar": "https://avatars.githubusercontent.com/u/26474842",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "37705810-aaf3-49e9-a9fd-42c9b90603ca",
        "name": "Ollie Bechtelar",
        "title": "Corporate Infrastructure Facilitator",
        "address": {
            "street": "9514 Rutherford Grove",
            "city": "Coopermouth",
            "state": "West Virginia",
            "zip": "19803-2882",
            "country": "Libyan Arab Jamahiriya"
        },
        "avatar": "https://avatars.githubusercontent.com/u/95371573",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d583adcc-4baa-402c-a5ea-8d1c2c69604a",
        "name": "Priscilla McDermott",
        "title": "Senior Functionality Manager",
        "address": {
            "street": "956 McKenzie Ranch",
            "city": "Robelborough",
            "state": "Massachusetts",
            "zip": "99665",
            "country": "Moldova"
        },
        "avatar": "https://avatars.githubusercontent.com/u/65053799",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "321727aa-765e-4a36-9ef5-7a55cf86df0b",
        "name": "Lila Kuphal",
        "title": "Global Program Executive",
        "address": {
            "street": "5885 Veum Keys",
            "city": "Port Hubert",
            "state": "Maine",
            "zip": "04618",
            "country": "Senegal"
        },
        "avatar": "https://avatars.githubusercontent.com/u/45514499",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "52a279c4-3901-40e4-ad2b-b2b714571672",
        "name": "Mandy Flatley I",
        "title": "Legacy Infrastructure Engineer",
        "address": {
            "street": "16582 Devin Rue",
            "city": "Fort Christopherbury",
            "state": "Iowa",
            "zip": "74814",
            "country": "Peru"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/427.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "329a6afa-894c-4740-931e-1565fff03358",
        "name": "Mrs. Harriet Cummerata",
        "title": "Human Usability Facilitator",
        "address": {
            "street": "243 Keebler Common",
            "city": "Olympia",
            "state": "Montana",
            "zip": "21142-6331",
            "country": "Indonesia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/21093868",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3361de46-12a3-43f3-9d48-853b690e64fe",
        "name": "Jose Steuber",
        "title": "Central Brand Manager",
        "address": {
            "street": "751 Lowe Lights",
            "city": "North Monte",
            "state": "Kentucky",
            "zip": "91942-9812",
            "country": "Djibouti"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/707.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5b3672ac-99ba-410c-bb3a-d046d2bd611c",
        "name": "Annette Stroman",
        "title": "Product Assurance Developer",
        "address": {
            "street": "72548 Glover Valleys",
            "city": "Lake Maurine",
            "state": "Delaware",
            "zip": "06753",
            "country": "Estonia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/88394360",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e30c54cc-9d73-4413-8aff-aa3eddf263df",
        "name": "Kayla Price",
        "title": "Lead Research Facilitator",
        "address": {
            "street": "448 Rodolfo Prairie",
            "city": "Shieldshaven",
            "state": "Hawaii",
            "zip": "07536",
            "country": "Bangladesh"
        },
        "avatar": "https://avatars.githubusercontent.com/u/53471085",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a797a3c8-32b1-450e-ab71-b72a2d2c620b",
        "name": "Albert Johns",
        "title": "Forward Accounts Engineer",
        "address": {
            "street": "63311 Zieme Drives",
            "city": "Pine Bluff",
            "state": "New Jersey",
            "zip": "13624",
            "country": "Venezuela"
        },
        "avatar": "https://avatars.githubusercontent.com/u/3748507",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "76c043d5-5e77-4586-b850-4bee436f463b",
        "name": "Judy Kohler",
        "title": "Human Markets Associate",
        "address": {
            "street": "39174 Maggio Fall",
            "city": "East Miguelboro",
            "state": "Massachusetts",
            "zip": "51177",
            "country": "Reunion"
        },
        "avatar": "https://avatars.githubusercontent.com/u/82530253",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b8f39f9b-5855-4c4c-9834-4c7ec3382581",
        "name": "Mrs. Vivian Walker",
        "title": "International Accounts Manager",
        "address": {
            "street": "21823 Wehner Dale",
            "city": "Valdosta",
            "state": "Missouri",
            "zip": "40026-5080",
            "country": "Svalbard & Jan Mayen Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/657.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "25fd604d-a726-4773-b1dc-cbb860e4fc9d",
        "name": "Kurt Stokes",
        "title": "Global Optimization Agent",
        "address": {
            "street": "442 Stark Mill",
            "city": "Linden",
            "state": "Oklahoma",
            "zip": "71496-5131",
            "country": "Guyana"
        },
        "avatar": "https://avatars.githubusercontent.com/u/37368979",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1c1b3fe6-6435-4e0c-b0f0-d683af8a252a",
        "name": "Jasmine Hackett III",
        "title": "International Implementation Manager",
        "address": {
            "street": "22925 Elbert Extension",
            "city": "Linniehaven",
            "state": "Oregon",
            "zip": "36200-8654",
            "country": "Paraguay"
        },
        "avatar": "https://avatars.githubusercontent.com/u/47855500",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "eec588a5-d266-464c-9adb-25a0ccba9de6",
        "name": "Jennie Gislason DVM",
        "title": "Human Creative Assistant",
        "address": {
            "street": "14692 Klocko Lights",
            "city": "Pacochahaven",
            "state": "Delaware",
            "zip": "92248",
            "country": "Djibouti"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/41.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7ac69c8e-1f7d-4ec9-a534-b772f4478ee8",
        "name": "Shannon Parker",
        "title": "Customer Functionality Analyst",
        "address": {
            "street": "3186 Yadira Circle",
            "city": "Schadenbury",
            "state": "California",
            "zip": "03212",
            "country": "Armenia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/143.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "07de86b7-858f-47ce-8f36-91e2f2df88ca",
        "name": "Shirley Hane",
        "title": "Chief Applications Administrator",
        "address": {
            "street": "2850 Langosh Center",
            "city": "Kiehnton",
            "state": "Kansas",
            "zip": "40706",
            "country": "Uruguay"
        },
        "avatar": "https://avatars.githubusercontent.com/u/22441219",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f335e848-6ad4-459b-9e4f-c4ccdae0f25e",
        "name": "Randall Mohr",
        "title": "Global Optimization Agent",
        "address": {
            "street": "756 Mollie Cape",
            "city": "Stiedemannstad",
            "state": "Maryland",
            "zip": "23376-2782",
            "country": "Guinea"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/489.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "bf55c65d-23ac-4dfe-944d-fe3cff6d9156",
        "name": "Ralph Bode",
        "title": "Legacy Brand Administrator",
        "address": {
            "street": "18445 Lorenza Estate",
            "city": "Schambergertown",
            "state": "New York",
            "zip": "52710-0355",
            "country": "Belize"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/942.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0b51ad3b-a486-4112-859e-0e6a3dd9aace",
        "name": "Dana Abernathy",
        "title": "Internal Optimization Designer",
        "address": {
            "street": "7675 Stark Pike",
            "city": "Port Wilhelmcester",
            "state": "North Dakota",
            "zip": "28722",
            "country": "Nicaragua"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/904.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3f5e0acb-c524-4370-bd15-87f5ae878c13",
        "name": "Hilda Franecki",
        "title": "Regional Response Orchestrator",
        "address": {
            "street": "505 West Centers",
            "city": "North Eda",
            "state": "North Carolina",
            "zip": "44756",
            "country": "Bouvet Island"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/337.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9160c678-eebd-400e-9622-3b1daa5e38d2",
        "name": "Kim Stoltenberg",
        "title": "Senior Data Officer",
        "address": {
            "street": "2538 Vandervort Pass",
            "city": "Effertzfield",
            "state": "Virginia",
            "zip": "37611",
            "country": "Somalia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/810.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2bdf9156-c8fa-4ce6-980a-fd2b97f9834b",
        "name": "Orlando Schuppe",
        "title": "Corporate Optimization Orchestrator",
        "address": {
            "street": "66755 Tyreek Causeway",
            "city": "Cruickshankland",
            "state": "Delaware",
            "zip": "30860",
            "country": "Canada"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/178.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9bd8c465-e415-4254-b399-37ef9772e580",
        "name": "Kellie Robel-Bashirian",
        "title": "National Tactics Administrator",
        "address": {
            "street": "206 Mariano Locks",
            "city": "Spencerview",
            "state": "New Hampshire",
            "zip": "73352-0915",
            "country": "New Zealand"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/729.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2086d824-e18f-460a-bfe3-0130336f5304",
        "name": "Clinton Russel MD",
        "title": "Customer Identity Analyst",
        "address": {
            "street": "30192 Baumbach Crest",
            "city": "East Hattie",
            "state": "West Virginia",
            "zip": "87250-3501",
            "country": "British Indian Ocean Territory (Chagos Archipelago)"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1026.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f62cffc3-5fa1-4d9a-8fa7-83b7ee52b722",
        "name": "Lee Hegmann",
        "title": "Legacy Infrastructure Assistant",
        "address": {
            "street": "93050 Caleigh Curve",
            "city": "Carsonshire",
            "state": "Arizona",
            "zip": "61283",
            "country": "Sierra Leone"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/423.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e326dc30-cfe6-47f2-9156-ca4c52cfb2aa",
        "name": "Jimmy Nienow-Feil",
        "title": "Senior Research Orchestrator",
        "address": {
            "street": "242 Koepp Unions",
            "city": "North Isabellaview",
            "state": "New Jersey",
            "zip": "62486",
            "country": "French Southern Territories"
        },
        "avatar": "https://avatars.githubusercontent.com/u/64350143",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0abc5f75-c7a1-4cfa-b017-afe35659ed51",
        "name": "Michael Jacobi",
        "title": "International Mobility Facilitator",
        "address": {
            "street": "372 Barrows Crossing",
            "city": "Wheaton",
            "state": "Kansas",
            "zip": "46135-2386",
            "country": "Aland Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/940.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a403adb5-8ea1-499e-a199-515f83f0458a",
        "name": "Melvin O'Keefe",
        "title": "Dynamic Response Architect",
        "address": {
            "street": "47518 Misty Parkways",
            "city": "North Dena",
            "state": "Minnesota",
            "zip": "82025",
            "country": "Australia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/71193094",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "cd03d106-ce05-453e-97e2-76893c67612f",
        "name": "Dr. Darlene Olson",
        "title": "National Communications Associate",
        "address": {
            "street": "233 Ezequiel Highway",
            "city": "Lake Alexandre",
            "state": "North Carolina",
            "zip": "76818-6575",
            "country": "Egypt"
        },
        "avatar": "https://avatars.githubusercontent.com/u/22829215",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "12341f76-09c4-4fc0-bf6f-da65c2871c32",
        "name": "Michelle Boehm",
        "title": "Regional Accounts Facilitator",
        "address": {
            "street": "19736 Ahmad Spring",
            "city": "North Guychester",
            "state": "Florida",
            "zip": "97968-2900",
            "country": "Algeria"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/504.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "86d7342b-71c5-42b2-8428-7602cb6fdff5",
        "name": "Howard Nitzsche III",
        "title": "National Web Manager",
        "address": {
            "street": "476 Jermey Cape",
            "city": "Balistreriside",
            "state": "New Hampshire",
            "zip": "02227",
            "country": "Aruba"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/237.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c4cf574e-8f29-4af3-9c42-239ec8fada5b",
        "name": "Diana Sporer",
        "title": "Chief Usability Liaison",
        "address": {
            "street": "4480 Rowe Rest",
            "city": "Georgebury",
            "state": "Michigan",
            "zip": "45198",
            "country": "Comoros"
        },
        "avatar": "https://avatars.githubusercontent.com/u/60994660",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "517f80f4-d578-4467-876e-255382fdfec5",
        "name": "Dr. Phillip Kuphal",
        "title": "Principal Applications Director",
        "address": {
            "street": "6770 Kiehn View",
            "city": "South Tabithaville",
            "state": "Virginia",
            "zip": "54631-3087",
            "country": "Turkmenistan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/51043637",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7ed03c6c-03a8-43ef-9f67-f47803767f9c",
        "name": "Edith Grant",
        "title": "Global Factors Analyst",
        "address": {
            "street": "5685 Cartwright Cape",
            "city": "Heaneyburgh",
            "state": "Oregon",
            "zip": "20039",
            "country": "Italy"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1232.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "63f8b1d4-cece-4aa2-949c-cdece8ffa666",
        "name": "Dr. Cassandra Stiedemann",
        "title": "Product Program Engineer",
        "address": {
            "street": "772 Kyleigh Neck",
            "city": "South Susan",
            "state": "North Carolina",
            "zip": "01094-5455",
            "country": "Estonia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/78772495",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "916ebdc7-7b7d-4b33-94c4-75ab81c75aa5",
        "name": "Devin Considine",
        "title": "Investor Tactics Strategist",
        "address": {
            "street": "3301 Tyler Road",
            "city": "Mollieberg",
            "state": "Alabama",
            "zip": "55292",
            "country": "Western Sahara"
        },
        "avatar": "https://avatars.githubusercontent.com/u/76074982",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b6977ece-9eeb-43a3-bfbc-f35de0b45f94",
        "name": "Raul Batz PhD",
        "title": "Chief Marketing Specialist",
        "address": {
            "street": "694 Idella Track",
            "city": "West Laurence",
            "state": "North Dakota",
            "zip": "81161-8723",
            "country": "Haiti"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/985.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5fb9f357-aa74-4a19-bf8e-732d4a38ff5a",
        "name": "Mr. Stephen Will",
        "title": "Regional Functionality Developer",
        "address": {
            "street": "125 Glover Isle",
            "city": "Faustinoland",
            "state": "New Hampshire",
            "zip": "58061",
            "country": "Macao"
        },
        "avatar": "https://avatars.githubusercontent.com/u/34902031",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5fb2e810-d248-4a4c-afc0-4543e1af816d",
        "name": "Lloyd Schoen",
        "title": "Global Response Coordinator",
        "address": {
            "street": "288 Becker Rapid",
            "city": "Alvastead",
            "state": "Connecticut",
            "zip": "16666",
            "country": "Comoros"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/936.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "430f9787-2754-4c87-aec0-a1840657867e",
        "name": "Audrey Schmitt",
        "title": "Senior Interactions Assistant",
        "address": {
            "street": "210 Gabe Island",
            "city": "East Alannamouth",
            "state": "Colorado",
            "zip": "72679-7996",
            "country": "Niue"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/106.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "aaf72594-5fda-45c6-b301-68fed1ff84a2",
        "name": "Noel Hegmann",
        "title": "Regional Optimization Analyst",
        "address": {
            "street": "643 Courtney Ports",
            "city": "Lake Ariane",
            "state": "Kansas",
            "zip": "96135-3472",
            "country": "Samoa"
        },
        "avatar": "https://avatars.githubusercontent.com/u/13866762",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ebd43892-058e-4245-85dc-461f5786d402",
        "name": "Ralph Cummings",
        "title": "Dynamic Accountability Engineer",
        "address": {
            "street": "488 Williamson Village",
            "city": "South Sheridanboro",
            "state": "Maine",
            "zip": "16915",
            "country": "Ireland"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1220.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2d7984a1-6e52-421e-b0d8-2d89888e6b78",
        "name": "Natalie Prohaska",
        "title": "Principal Security Director",
        "address": {
            "street": "461 Pagac Unions",
            "city": "Berkeley",
            "state": "North Dakota",
            "zip": "54681-6385",
            "country": "Guinea-Bissau"
        },
        "avatar": "https://avatars.githubusercontent.com/u/1272020",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6fff692a-f213-4d66-8099-a3c060665500",
        "name": "Priscilla Larkin-Kuhlman",
        "title": "Customer Communications Coordinator",
        "address": {
            "street": "36338 Nat Loop",
            "city": "Lake Dudleyfurt",
            "state": "Oregon",
            "zip": "11410-3625",
            "country": "Mayotte"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/994.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ccdef223-4c31-4315-bada-587ec97b3f1c",
        "name": "Dr. Russell Mitchell-Lang",
        "title": "Legacy Implementation Officer",
        "address": {
            "street": "83615 Jakubowski Flats",
            "city": "Olsonworth",
            "state": "South Carolina",
            "zip": "82229-5129",
            "country": "Sierra Leone"
        },
        "avatar": "https://avatars.githubusercontent.com/u/30703211",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b7691818-5b62-4e13-adfd-5cf21d6bae67",
        "name": "Conrad Murphy",
        "title": "Chief Research Strategist",
        "address": {
            "street": "92866 Wilhelmine Prairie",
            "city": "Kavonfurt",
            "state": "New Jersey",
            "zip": "01314-8513",
            "country": "New Caledonia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/41064023",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6e58c506-e89a-48d6-bc4e-9556dac95c2d",
        "name": "Kristopher Braun III",
        "title": "Principal Assurance Producer",
        "address": {
            "street": "8085 Raheem Gardens",
            "city": "Parisianview",
            "state": "Colorado",
            "zip": "63103",
            "country": "Papua New Guinea"
        },
        "avatar": "https://avatars.githubusercontent.com/u/73384908",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "80b32e86-c958-4f54-9b9a-0927f2f0741b",
        "name": "Cecilia Beahan",
        "title": "Human Solutions Liaison",
        "address": {
            "street": "58079 Dickens Centers",
            "city": "Port Retta",
            "state": "Florida",
            "zip": "87925-4295",
            "country": "Guinea-Bissau"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/996.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "add750f5-09f6-49dd-af6f-843681f4104c",
        "name": "Claire Deckow",
        "title": "Forward Functionality Architect",
        "address": {
            "street": "17939 Stewart Track",
            "city": "Lueilwitzland",
            "state": "New Jersey",
            "zip": "94737-9965",
            "country": "Chile"
        },
        "avatar": "https://avatars.githubusercontent.com/u/30197671",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "662d64a5-ada7-4dc0-bc52-9ec31d4dcde7",
        "name": "Armando Volkman",
        "title": "Customer Directives Assistant",
        "address": {
            "street": "2457 Herman Creek",
            "city": "Sierra Vista",
            "state": "Maine",
            "zip": "57179-9846",
            "country": "Cambodia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/53729511",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "24273e3c-6963-47e7-8937-6184a5b21d6c",
        "name": "Beverly Bailey",
        "title": "Central Research Associate",
        "address": {
            "street": "2646 Reynolds Field",
            "city": "Bismarck",
            "state": "Indiana",
            "zip": "77111",
            "country": "Saint Vincent and the Grenadines"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/324.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "aef4b3d7-7726-4d00-b215-4895e710f680",
        "name": "Wilbur Ortiz DVM",
        "title": "Forward Research Assistant",
        "address": {
            "street": "7565 Leonor Freeway",
            "city": "North Clint",
            "state": "Michigan",
            "zip": "44461",
            "country": "Jersey"
        },
        "avatar": "https://avatars.githubusercontent.com/u/83926746",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f21bf5fa-00b0-45f1-9194-b83b629068aa",
        "name": "Lynette Heidenreich",
        "title": "Lead Program Analyst",
        "address": {
            "street": "635 Giovanny Causeway",
            "city": "Independence",
            "state": "Connecticut",
            "zip": "65202",
            "country": "Austria"
        },
        "avatar": "https://avatars.githubusercontent.com/u/18641517",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c7446407-83a5-4b3a-a05b-f35c13c84dd5",
        "name": "Floyd Halvorson",
        "title": "District Markets Engineer",
        "address": {
            "street": "88022 Dietrich Ferry",
            "city": "Valeriehaven",
            "state": "Oregon",
            "zip": "74654-0299",
            "country": "Turks and Caicos Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/91013598",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "bfdc2f8a-e08a-4d37-a9af-c9aac3e81f35",
        "name": "Delbert Hintz",
        "title": "Lead Data Agent",
        "address": {
            "street": "201 Alejandra Turnpike",
            "city": "Port Pollystead",
            "state": "Virginia",
            "zip": "47138-2767",
            "country": "Falkland Islands (Malvinas)"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1154.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3bf222b3-eb22-4ae8-aeed-f0e0118a3dbb",
        "name": "Ellis Keeling",
        "title": "Central Branding Director",
        "address": {
            "street": "972 Christ Estate",
            "city": "Arlocester",
            "state": "Hawaii",
            "zip": "80983-6012",
            "country": "Aland Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/3667",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2bcb4921-e6b5-48aa-9c45-9f4da4c0dafb",
        "name": "Clarence Roob",
        "title": "Dynamic Creative Manager",
        "address": {
            "street": "55771 Bruen Fork",
            "city": "West Hartford",
            "state": "Kentucky",
            "zip": "19401-9400",
            "country": "Botswana"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1165.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "71cb02f7-2f89-4aff-bb98-34aae65d3d9a",
        "name": "Dr. Gilberto Abernathy",
        "title": "Principal Web Officer",
        "address": {
            "street": "6254 Flossie Oval",
            "city": "Port Alvisburgh",
            "state": "Alaska",
            "zip": "64700",
            "country": "Botswana"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/690.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b80f6799-77ad-4043-a86e-c44f207c89f1",
        "name": "Jenny Von",
        "title": "District Communications Agent",
        "address": {
            "street": "3727 Predovic Inlet",
            "city": "North Dewitt",
            "state": "Rhode Island",
            "zip": "51577",
            "country": "Saudi Arabia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/982.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b120ef9a-2942-4bd6-be06-aa3a758d3eb1",
        "name": "Irvin Brown-Harris",
        "title": "Product Marketing Architect",
        "address": {
            "street": "47417 Little Turnpike",
            "city": "Port Abagailstad",
            "state": "Virginia",
            "zip": "34406",
            "country": "Saint Helena"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/530.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5d906ec8-7969-4fe8-b542-128e957fb1f6",
        "name": "Max Volkman",
        "title": "Lead Mobility Engineer",
        "address": {
            "street": "10971 Grimes Pass",
            "city": "New Lenore",
            "state": "Hawaii",
            "zip": "23321",
            "country": "Russian Federation"
        },
        "avatar": "https://avatars.githubusercontent.com/u/10508796",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d129ad1e-6eb0-48ec-8cc5-536b309c1d54",
        "name": "Chris Schuster",
        "title": "Investor Integration Developer",
        "address": {
            "street": "818 Javier Loop",
            "city": "Robertochester",
            "state": "North Dakota",
            "zip": "68287-0308",
            "country": "Bonaire, Sint Eustatius and Saba"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/457.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "84f6cbe3-bad8-4599-8459-3279f9b36da2",
        "name": "Roxanne Effertz",
        "title": "Lead Infrastructure Director",
        "address": {
            "street": "9237 Alana Fort",
            "city": "Labadiechester",
            "state": "Idaho",
            "zip": "10250-3220",
            "country": "Tunisia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/724.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a0484e22-979d-457e-8bb3-dba512c6b1f2",
        "name": "Ronnie Kovacek",
        "title": "Legacy Branding Representative",
        "address": {
            "street": "7525 Yost Port",
            "city": "Marksland",
            "state": "New Hampshire",
            "zip": "92545-5957",
            "country": "Tonga"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/488.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a9e78d8a-70f2-4d56-9d55-2a328a8582a5",
        "name": "Rosemarie Dickens",
        "title": "Future Communications Orchestrator",
        "address": {
            "street": "245 Daniel Forks",
            "city": "Lazaroborough",
            "state": "Ohio",
            "zip": "96316-1073",
            "country": "Virgin Islands, British"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/982.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "571fbf4b-e867-4f78-b8a5-9c207e34e155",
        "name": "Cornelius Dooley",
        "title": "Legacy Web Agent",
        "address": {
            "street": "511 O'Conner Mission",
            "city": "Kadenside",
            "state": "Massachusetts",
            "zip": "25522-8827",
            "country": "Heard Island and McDonald Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1001.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8f380836-a929-47cf-90d3-d8ca45c079a8",
        "name": "Jesse Luettgen DVM",
        "title": "Lead Group Specialist",
        "address": {
            "street": "99758 Annamarie Flats",
            "city": "East Allison",
            "state": "Idaho",
            "zip": "16698",
            "country": "Honduras"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/476.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "65764876-5bb0-40b3-b21c-72814e49db97",
        "name": "Shaun Larkin",
        "title": "Investor Operations Technician",
        "address": {
            "street": "321 Kunde Manor",
            "city": "West Reanna",
            "state": "Delaware",
            "zip": "93566",
            "country": "Zimbabwe"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/336.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f2dacc02-1f8f-4b59-9e45-c7ecc7dfcbd5",
        "name": "Dr. Stacey Wisozk",
        "title": "Investor Tactics Representative",
        "address": {
            "street": "5378 June Bypass",
            "city": "Fletastead",
            "state": "Washington",
            "zip": "96674-6581",
            "country": "Turkmenistan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/54514755",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ba27a54b-5886-4790-8872-79278e18e2c9",
        "name": "Lorene Denesik",
        "title": "Senior Tactics Agent",
        "address": {
            "street": "67289 Swift Spurs",
            "city": "Luettgenburgh",
            "state": "Florida",
            "zip": "42742",
            "country": "Syrian Arab Republic"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/304.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a6cfbb80-8bc4-4bff-bfbf-03871ab7d132",
        "name": "Irene Sawayn",
        "title": "Dynamic Metrics Supervisor",
        "address": {
            "street": "7964 Carlo Landing",
            "city": "Sugar Land",
            "state": "Texas",
            "zip": "12287",
            "country": "Turks and Caicos Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/84.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "29193cf7-a66f-469f-8de9-bc7a0210c6c5",
        "name": "Joel Toy-Hartmann",
        "title": "Regional Metrics Orchestrator",
        "address": {
            "street": "77175 Jillian Course",
            "city": "Port Beverly",
            "state": "Indiana",
            "zip": "66166",
            "country": "Georgia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/968.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "179c1d9a-1b85-4175-9fb1-f2c30bb10e54",
        "name": "Jaime Mitchell",
        "title": "Future Creative Specialist",
        "address": {
            "street": "766 Wintheiser Lights",
            "city": "North Aracely",
            "state": "New York",
            "zip": "88063",
            "country": "Fiji"
        },
        "avatar": "https://avatars.githubusercontent.com/u/99716915",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f3b8e6dc-4b0a-4046-a9b2-33794a81f1d5",
        "name": "Shari McKenzie",
        "title": "Legacy Accountability Orchestrator",
        "address": {
            "street": "8390 Heloise Wells",
            "city": "South Oma",
            "state": "Alaska",
            "zip": "75489",
            "country": "Equatorial Guinea"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/962.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ddfdd7cf-5d7c-473a-84ab-4ac362fd8483",
        "name": "Randy Zieme",
        "title": "Senior Metrics Liaison",
        "address": {
            "street": "639 Rolando Walks",
            "city": "Huntersville",
            "state": "New York",
            "zip": "00672",
            "country": "Czechia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/51913024",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ffe7e17e-f1c5-4288-90a0-2d2a6e857b86",
        "name": "Paulette Bode",
        "title": "Product Intranet Representative",
        "address": {
            "street": "985 John Lake",
            "city": "East Santiago",
            "state": "Arkansas",
            "zip": "69646-5319",
            "country": "Botswana"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/44.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a857ff1b-0a85-4942-b706-69a5ff80868a",
        "name": "Dennis Wintheiser",
        "title": "Legacy Interactions Consultant",
        "address": {
            "street": "30726 O'Connell Hollow",
            "city": "Orland Park",
            "state": "Rhode Island",
            "zip": "49056-0172",
            "country": "United Kingdom"
        },
        "avatar": "https://avatars.githubusercontent.com/u/4835079",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c0484597-eb40-4b77-9da7-c4c66fbe105c",
        "name": "Matthew Kuphal",
        "title": "District Branding Representative",
        "address": {
            "street": "73631 Veum Stream",
            "city": "East Margarete",
            "state": "Hawaii",
            "zip": "41681",
            "country": "Congo"
        },
        "avatar": "https://avatars.githubusercontent.com/u/77682930",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "bff8b8a2-3937-421a-b5e8-d6b1d5d6ba8a",
        "name": "Brad Kihn",
        "title": "Human Markets Liaison",
        "address": {
            "street": "1066 Hal Lock",
            "city": "North Nathen",
            "state": "New Mexico",
            "zip": "27920",
            "country": "Vanuatu"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/254.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e093e634-0b73-4281-b528-09d3e46430a0",
        "name": "Katie Kulas-Mueller",
        "title": "Legacy Accountability Strategist",
        "address": {
            "street": "914 O'Keefe Stravenue",
            "city": "Port Taratown",
            "state": "Montana",
            "zip": "51721",
            "country": "Oman"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1006.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1ce09621-965e-4822-807c-78e52f3dfeb1",
        "name": "Dr. Jordan Smith",
        "title": "Human Response Supervisor",
        "address": {
            "street": "505 Reagan Throughway",
            "city": "Cormierton",
            "state": "Utah",
            "zip": "51492",
            "country": "Bulgaria"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/323.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "28fbcff8-2d3d-4c75-9724-660b7acdb6cf",
        "name": "Mark Von",
        "title": "Global Brand Facilitator",
        "address": {
            "street": "7082 Parker Lights",
            "city": "McKenzieland",
            "state": "Arkansas",
            "zip": "77877",
            "country": "Bahrain"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1200.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "dfc227e4-22c6-4b06-a1bd-ebae6f205d33",
        "name": "Lula Rice DVM",
        "title": "Principal Solutions Producer",
        "address": {
            "street": "8795 Leta Junctions",
            "city": "Placentia",
            "state": "Florida",
            "zip": "15711-5068",
            "country": "Republic of Korea"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/732.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c77671da-2f9f-40e1-b737-a7404357c853",
        "name": "Delbert Sawayn",
        "title": "Customer Research Designer",
        "address": {
            "street": "8440 Schuppe Summit",
            "city": "Houstonfort",
            "state": "Missouri",
            "zip": "85249",
            "country": "Sierra Leone"
        },
        "avatar": "https://avatars.githubusercontent.com/u/15796824",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d6f5e3a1-e13f-4946-a8c4-2e9474f92c42",
        "name": "Faith McLaughlin",
        "title": "National Research Supervisor",
        "address": {
            "street": "4487 Lemke Rapids",
            "city": "South Clintville",
            "state": "Louisiana",
            "zip": "11599",
            "country": "Pitcairn Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/318.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f0e9128c-fd61-4543-991f-ab28b2e6a6d4",
        "name": "Dixie Lueilwitz",
        "title": "Investor Mobility Producer",
        "address": {
            "street": "703 Palma Mews",
            "city": "Kissimmee",
            "state": "Florida",
            "zip": "36282-7765",
            "country": "United Arab Emirates"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/592.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c52aa73b-4903-4e58-a052-6ffa451d3579",
        "name": "Margarita Krajcik",
        "title": "Customer Branding Director",
        "address": {
            "street": "387 Jadyn Views",
            "city": "Fort Connerland",
            "state": "South Carolina",
            "zip": "60927-0428",
            "country": "India"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/714.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ba7c0093-afab-405e-8e5d-dff049ebfd59",
        "name": "Mamie Lueilwitz",
        "title": "Future Accountability Associate",
        "address": {
            "street": "70510 Garnett Bridge",
            "city": "New Lisette",
            "state": "Utah",
            "zip": "67159",
            "country": "Curacao"
        },
        "avatar": "https://avatars.githubusercontent.com/u/35628193",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "abc88c2a-9cfb-482d-a1d1-9c7e43efd149",
        "name": "Patty Brekke",
        "title": "Customer Configuration Consultant",
        "address": {
            "street": "835 Rice Highway",
            "city": "Port Abraham",
            "state": "Idaho",
            "zip": "52040-0297",
            "country": "Benin"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/453.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e1d8d3df-99d7-423c-ad81-3cdd5eb6a3dc",
        "name": "Renee Buckridge",
        "title": "Corporate Tactics Representative",
        "address": {
            "street": "47718 Christop Bypass",
            "city": "Spokane",
            "state": "New Hampshire",
            "zip": "54376",
            "country": "Burkina Faso"
        },
        "avatar": "https://avatars.githubusercontent.com/u/21919131",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2c163077-a95f-41cd-ae9d-2c5434d8068f",
        "name": "Leona Okuneva I",
        "title": "Human Operations Developer",
        "address": {
            "street": "587 Rene Fields",
            "city": "East Darioville",
            "state": "Vermont",
            "zip": "62456-1090",
            "country": "Yemen"
        },
        "avatar": "https://avatars.githubusercontent.com/u/74525726",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ebe98615-98b2-4a85-a7e0-705c0576b40c",
        "name": "Kristine Kshlerin",
        "title": "Human Division Architect",
        "address": {
            "street": "4095 Collins Roads",
            "city": "Montgomery",
            "state": "Arizona",
            "zip": "54849",
            "country": "Panama"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/130.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d97d7d56-a0c3-4615-81c8-752978f8db7b",
        "name": "Violet Rath",
        "title": "Principal Response Officer",
        "address": {
            "street": "4397 Okuneva Green",
            "city": "Lafayette",
            "state": "Hawaii",
            "zip": "00495-9131",
            "country": "Ghana"
        },
        "avatar": "https://avatars.githubusercontent.com/u/14054661",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "dab1fb2f-2332-40de-bb54-18380dc7d269",
        "name": "Sherman Rath",
        "title": "Central Applications Director",
        "address": {
            "street": "165 Breitenberg Camp",
            "city": "South Stephon",
            "state": "North Dakota",
            "zip": "71921",
            "country": "Bulgaria"
        },
        "avatar": "https://avatars.githubusercontent.com/u/37789016",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e643d071-df86-4bf1-a55c-74b90c55f492",
        "name": "Monique Kuhn",
        "title": "Direct Operations Strategist",
        "address": {
            "street": "6191 Elda Walk",
            "city": "Schinnerchester",
            "state": "Utah",
            "zip": "88320",
            "country": "French Polynesia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/12452143",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d9ccf654-8540-470d-b29b-55b2d32568bf",
        "name": "Geneva Wehner I",
        "title": "National Intranet Analyst",
        "address": {
            "street": "32325 Effertz Glen",
            "city": "Las Vegas",
            "state": "Iowa",
            "zip": "93817",
            "country": "Cote d'Ivoire"
        },
        "avatar": "https://avatars.githubusercontent.com/u/52997595",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ec163e7e-9393-4940-a496-f735d4e8d722",
        "name": "Dwayne Stracke",
        "title": "Chief Creative Engineer",
        "address": {
            "street": "45428 Mertz Causeway",
            "city": "Boehmton",
            "state": "Missouri",
            "zip": "31759-8353",
            "country": "Ireland"
        },
        "avatar": "https://avatars.githubusercontent.com/u/56900878",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e3f941c6-4a12-4c4e-a7db-e01080f3888a",
        "name": "Isaac Konopelski",
        "title": "Lead Intranet Agent",
        "address": {
            "street": "69463 Theodore Ridges",
            "city": "Fort Pauline",
            "state": "Nevada",
            "zip": "36642",
            "country": "Armenia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/50205591",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "80cbd605-c34c-4e55-a943-650c596e9414",
        "name": "Bernadette Blanda",
        "title": "Direct Operations Executive",
        "address": {
            "street": "563 Kirlin Canyon",
            "city": "Konopelskiberg",
            "state": "Louisiana",
            "zip": "10915",
            "country": "Bonaire, Sint Eustatius and Saba"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1041.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "208cd04d-375f-4bb1-a30c-bf76ff44b7a0",
        "name": "Virginia Runolfsson",
        "title": "Legacy Web Facilitator",
        "address": {
            "street": "3777 Nader Point",
            "city": "Port Andy",
            "state": "Illinois",
            "zip": "52519",
            "country": "Togo"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/426.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8d0f76e0-059c-4e4a-8fd1-833d42b12510",
        "name": "Daniel Feest",
        "title": "Direct Optimization Manager",
        "address": {
            "street": "120 Lemuel Loaf",
            "city": "East Hilma",
            "state": "West Virginia",
            "zip": "89835-0048",
            "country": "Poland"
        },
        "avatar": "https://avatars.githubusercontent.com/u/22566038",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "acaa42e1-0e05-4885-a7b7-20453ce2be13",
        "name": "Ora Zboncak",
        "title": "Corporate Implementation Agent",
        "address": {
            "street": "96465 Walter Passage",
            "city": "Port St. Lucie",
            "state": "Hawaii",
            "zip": "44098",
            "country": "Norway"
        },
        "avatar": "https://avatars.githubusercontent.com/u/43390597",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "de3e2c87-0141-4a6f-8d46-b2040e86c1fe",
        "name": "Dr. Chester Jenkins",
        "title": "Central Security Director",
        "address": {
            "street": "84578 Moen Stravenue",
            "city": "Fort Mittieside",
            "state": "Oregon",
            "zip": "18544",
            "country": "Bouvet Island"
        },
        "avatar": "https://avatars.githubusercontent.com/u/41405213",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3672c595-0a6f-4fd2-b148-7b0eee42b700",
        "name": "Krista Mertz",
        "title": "Regional Integration Officer",
        "address": {
            "street": "8592 Sarina Forks",
            "city": "South Norma",
            "state": "Maryland",
            "zip": "53420-4468",
            "country": "Gibraltar"
        },
        "avatar": "https://avatars.githubusercontent.com/u/97484804",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b12a700d-081e-4a57-bfd7-cca96c40042f",
        "name": "Andrea D'Amore IV",
        "title": "Regional Assurance Engineer",
        "address": {
            "street": "250 Shania Meadow",
            "city": "Rathchester",
            "state": "Utah",
            "zip": "02837",
            "country": "Pitcairn Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/87.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "86d31a8f-60e1-4323-9408-0c92e3a6f030",
        "name": "Luz Price",
        "title": "Central Applications Architect",
        "address": {
            "street": "4497 Hyatt Fork",
            "city": "Oniefort",
            "state": "Tennessee",
            "zip": "96040-9209",
            "country": "Malawi"
        },
        "avatar": "https://avatars.githubusercontent.com/u/1498596",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "08b426a0-20db-4037-857f-00805528cc02",
        "name": "Floyd Friesen",
        "title": "Internal Markets Technician",
        "address": {
            "street": "7993 Marcia Spring",
            "city": "Lueilwitzstead",
            "state": "Illinois",
            "zip": "54757-1015",
            "country": "Wallis and Futuna"
        },
        "avatar": "https://avatars.githubusercontent.com/u/35171294",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5ed7137b-6fb1-494c-915a-89e4dd180847",
        "name": "Everett Beier",
        "title": "Future Directives Technician",
        "address": {
            "street": "407 Scottie Hill",
            "city": "Schultzland",
            "state": "South Dakota",
            "zip": "08274-2627",
            "country": "New Caledonia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/43939146",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "79074752-5918-49fe-9ab5-db4df98c5d3b",
        "name": "Carlton Von",
        "title": "National Factors Manager",
        "address": {
            "street": "6328 Melody Parks",
            "city": "Port Loyal",
            "state": "New York",
            "zip": "54717",
            "country": "China"
        },
        "avatar": "https://avatars.githubusercontent.com/u/96314808",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d6030433-4e5a-4dce-9ade-83e99b3def19",
        "name": "Dr. Dean Harris-Reinger",
        "title": "International Branding Developer",
        "address": {
            "street": "966 Weissnat Dam",
            "city": "Brakusbury",
            "state": "Washington",
            "zip": "11678",
            "country": "Egypt"
        },
        "avatar": "https://avatars.githubusercontent.com/u/94222686",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "37d49535-3ca2-4555-bfa5-b8e84c73e73f",
        "name": "Gregg Jakubowski",
        "title": "Global Interactions Producer",
        "address": {
            "street": "8942 Mallory Avenue",
            "city": "Andyburgh",
            "state": "Maine",
            "zip": "77591",
            "country": "Bolivia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/37402471",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "88664dc9-923c-464a-b4b6-31361e9d8682",
        "name": "Homer Collins",
        "title": "Senior Metrics Director",
        "address": {
            "street": "4750 Schimmel Ramp",
            "city": "Bozeman",
            "state": "Kansas",
            "zip": "03058-3368",
            "country": "Falkland Islands (Malvinas)"
        },
        "avatar": "https://avatars.githubusercontent.com/u/56589772",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ccfb08be-503f-4d61-b5d9-02be65723278",
        "name": "Traci Hirthe",
        "title": "Corporate Integration Technician",
        "address": {
            "street": "68700 Beulah Corners",
            "city": "Lake Norma",
            "state": "Nevada",
            "zip": "45032",
            "country": "Costa Rica"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/225.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "131b5039-f103-483b-90dd-e0cc621fa047",
        "name": "Genevieve Nader",
        "title": "Forward Directives Assistant",
        "address": {
            "street": "7177 Zoey Circles",
            "city": "Yuma",
            "state": "Virginia",
            "zip": "72249",
            "country": "Czechia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1084.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "01307d5b-cd6a-44b8-a394-ea58f1bc458a",
        "name": "Debra Wyman",
        "title": "Chief Usability Technician",
        "address": {
            "street": "9042 Judah Shore",
            "city": "Lake Danahaven",
            "state": "New Hampshire",
            "zip": "42725",
            "country": "Liechtenstein"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/302.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "81bb6a29-27cf-44f0-bbd4-257b8f668d03",
        "name": "Betsy Bayer",
        "title": "International Integration Associate",
        "address": {
            "street": "699 Bosco Run",
            "city": "Indio",
            "state": "Maine",
            "zip": "29848-5897",
            "country": "Romania"
        },
        "avatar": "https://avatars.githubusercontent.com/u/81643216",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "70c5b432-6c80-4ef5-be20-94dffbb6fc72",
        "name": "Marvin Kohler",
        "title": "Forward Optimization Technician",
        "address": {
            "street": "7868 McLaughlin Spurs",
            "city": "West Rey",
            "state": "New Hampshire",
            "zip": "45377",
            "country": "Philippines"
        },
        "avatar": "https://avatars.githubusercontent.com/u/962937",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a8fe4856-0c34-4913-979f-707377abb5c2",
        "name": "Miss Maria Kuvalis",
        "title": "Global Metrics Strategist",
        "address": {
            "street": "7255 Noemy Pike",
            "city": "West Inesberg",
            "state": "Delaware",
            "zip": "81876",
            "country": "Liberia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/442.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6d1c0ec8-dce8-4f79-83aa-4d72786003d7",
        "name": "Diane Bradtke",
        "title": "Dynamic Solutions Associate",
        "address": {
            "street": "7668 Maximus Knoll",
            "city": "Keshauntown",
            "state": "New Hampshire",
            "zip": "16994",
            "country": "Brazil"
        },
        "avatar": "https://avatars.githubusercontent.com/u/95829747",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "357739c9-a510-49a1-8ea5-ee19a9eb4fe2",
        "name": "Frank Kertzmann Jr.",
        "title": "Human Brand Coordinator",
        "address": {
            "street": "337 Berneice Squares",
            "city": "New Garrisonshire",
            "state": "Tennessee",
            "zip": "73262-2870",
            "country": "Algeria"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/686.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0bada36f-5043-4349-a94c-e3084ecd22fb",
        "name": "Bernice Kutch",
        "title": "Human Usability Analyst",
        "address": {
            "street": "5273 Glen Walk",
            "city": "Rebamouth",
            "state": "New Mexico",
            "zip": "93585",
            "country": "Suriname"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/880.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "785d0ab0-50e9-4928-abfa-1bd7f76ae485",
        "name": "Patti Rosenbaum",
        "title": "Regional Research Manager",
        "address": {
            "street": "1947 Williamson Spur",
            "city": "West Ellenworth",
            "state": "Colorado",
            "zip": "85910-2873",
            "country": "Mauritania"
        },
        "avatar": "https://avatars.githubusercontent.com/u/76467634",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b89feb57-e3bf-4e5f-82a8-9961c9568d7d",
        "name": "Rachel Prosacco",
        "title": "Global Directives Developer",
        "address": {
            "street": "6160 Dalton Fort",
            "city": "Lake Forest",
            "state": "Michigan",
            "zip": "15029-6428",
            "country": "Timor-Leste"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/129.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6fadfb04-9816-404e-957a-d09898bd0fca",
        "name": "Megan Heaney",
        "title": "District Directives Agent",
        "address": {
            "street": "68013 Deontae Valley",
            "city": "Reingerchester",
            "state": "Idaho",
            "zip": "90354",
            "country": "Netherlands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1048.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "84f46a42-d359-484a-b60c-e791e3e63f21",
        "name": "Shelly Lakin",
        "title": "Lead Integration Planner",
        "address": {
            "street": "8501 Boyle Plaza",
            "city": "Bernhardfort",
            "state": "Connecticut",
            "zip": "95427-6798",
            "country": "Republic of Korea"
        },
        "avatar": "https://avatars.githubusercontent.com/u/96651540",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "dc4f721b-6faa-4733-bd8b-e2eb7c1c59f6",
        "name": "Lamar Ernser",
        "title": "Customer Branding Supervisor",
        "address": {
            "street": "6136 Monroe Wells",
            "city": "Port Keanu",
            "state": "North Dakota",
            "zip": "50255",
            "country": "Brazil"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/734.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2d614db1-d83d-4b3f-8a91-79edce1fdcf5",
        "name": "Brandi Streich",
        "title": "Lead Tactics Representative",
        "address": {
            "street": "986 Leffler Parks",
            "city": "Bellflower",
            "state": "Indiana",
            "zip": "54676-4011",
            "country": "Rwanda"
        },
        "avatar": "https://avatars.githubusercontent.com/u/32200533",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9a7caaf0-8c19-4c6f-ac8d-3c800c28049e",
        "name": "Fernando Luettgen",
        "title": "Direct Assurance Orchestrator",
        "address": {
            "street": "1739 Batz Unions",
            "city": "West Tanner",
            "state": "Illinois",
            "zip": "17589-3387",
            "country": "Guinea-Bissau"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/890.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e335778d-52da-4604-869e-45918815737c",
        "name": "Mr. Dexter Reinger",
        "title": "Legacy Configuration Officer",
        "address": {
            "street": "601 O'Kon Run",
            "city": "Bednarborough",
            "state": "Tennessee",
            "zip": "36667-8103",
            "country": "Sao Tome and Principe"
        },
        "avatar": "https://avatars.githubusercontent.com/u/51241986",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "738c16a2-d840-4e09-ab4e-e987d52e3983",
        "name": "Della Mante",
        "title": "Dynamic Quality Technician",
        "address": {
            "street": "3072 Dave Mall",
            "city": "Rancho Cordova",
            "state": "Vermont",
            "zip": "19956-9897",
            "country": "Falkland Islands (Malvinas)"
        },
        "avatar": "https://avatars.githubusercontent.com/u/27643712",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1d716b65-0438-43cd-86d0-5ce5cab0b368",
        "name": "Tabitha Ondricka",
        "title": "Global Optimization Executive",
        "address": {
            "street": "695 Candace Mill",
            "city": "South Myra",
            "state": "West Virginia",
            "zip": "29379-1719",
            "country": "India"
        },
        "avatar": "https://avatars.githubusercontent.com/u/94865562",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8cba3da0-f7ce-4256-9639-4764204383d4",
        "name": "Felix Stehr-Armstrong",
        "title": "Global Mobility Designer",
        "address": {
            "street": "508 Sophie View",
            "city": "Findlay",
            "state": "Michigan",
            "zip": "12937-7650",
            "country": "Iceland"
        },
        "avatar": "https://avatars.githubusercontent.com/u/87870952",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f401d438-374a-48ce-a545-259d60906aa2",
        "name": "Gina Cummings",
        "title": "Lead Branding Strategist",
        "address": {
            "street": "60025 Chanelle Camp",
            "city": "East Norbert",
            "state": "Florida",
            "zip": "04797",
            "country": "Kuwait"
        },
        "avatar": "https://avatars.githubusercontent.com/u/69772988",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c68296a4-d283-4726-8b6f-f2d735f3057c",
        "name": "Suzanne Sipes",
        "title": "Future Group Planner",
        "address": {
            "street": "96780 Hagenes Walk",
            "city": "East Jerod",
            "state": "Virginia",
            "zip": "23769",
            "country": "Eritrea"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/402.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1660bf01-6a0b-43cb-b02d-d787bffc2581",
        "name": "Kristina Hayes",
        "title": "Corporate Division Engineer",
        "address": {
            "street": "11382 Brown Alley",
            "city": "Lake Cindyland",
            "state": "Arkansas",
            "zip": "55255-1680",
            "country": "Western Sahara"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/361.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5639e12d-93b0-4e42-b552-1a26b5b14527",
        "name": "Emanuel Heller",
        "title": "Principal Response Analyst",
        "address": {
            "street": "67865 Gorczany Neck",
            "city": "Longview",
            "state": "Idaho",
            "zip": "93822-5195",
            "country": "Portugal"
        },
        "avatar": "https://avatars.githubusercontent.com/u/53089144",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "154e9cc1-0e39-484a-bda6-e9743ed5cbca",
        "name": "Jeffrey Jacobi",
        "title": "Regional Operations Coordinator",
        "address": {
            "street": "766 Nathaniel Unions",
            "city": "West Lawsonstad",
            "state": "Tennessee",
            "zip": "23910-7395",
            "country": "Tuvalu"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1220.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3e5f720c-ee61-4c84-bb00-cbf893482e70",
        "name": "Archie Erdman",
        "title": "Global Branding Coordinator",
        "address": {
            "street": "3256 Lowe Isle",
            "city": "Rileyview",
            "state": "New Jersey",
            "zip": "73229",
            "country": "Indonesia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/594.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e44818a6-9a24-4d54-999a-0f299dfdd9ef",
        "name": "Patsy Leuschke",
        "title": "Human Data Officer",
        "address": {
            "street": "2078 Zieme Ferry",
            "city": "South Joesph",
            "state": "Iowa",
            "zip": "69339-2643",
            "country": "Canada"
        },
        "avatar": "https://avatars.githubusercontent.com/u/15278754",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e784462e-aa3a-4562-a12c-908f13355da3",
        "name": "Sheila Beatty-Nolan",
        "title": "Future Response Engineer",
        "address": {
            "street": "525 Clara Crest",
            "city": "Lake Ariel",
            "state": "Massachusetts",
            "zip": "66105",
            "country": "Turks and Caicos Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/544.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "92f74977-9ad7-4b6c-a0da-e40759c83a47",
        "name": "Ian Hansen",
        "title": "Internal Metrics Producer",
        "address": {
            "street": "88308 Stoltenberg Isle",
            "city": "Port Bayleehaven",
            "state": "Pennsylvania",
            "zip": "79228-4207",
            "country": "Cuba"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/563.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d9ea4168-e7e0-427a-adba-01ed4654e33f",
        "name": "Sarah Corwin",
        "title": "Regional Communications Engineer",
        "address": {
            "street": "654 Wilkinson Divide",
            "city": "Williamsonmouth",
            "state": "Arkansas",
            "zip": "98595",
            "country": "Aruba"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/179.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "96dacca6-8b7f-403c-9e71-e45cf78a28b2",
        "name": "Earnest Kiehn",
        "title": "Dynamic Applications Agent",
        "address": {
            "street": "5357 Bergstrom Squares",
            "city": "Elsiemouth",
            "state": "Oregon",
            "zip": "36366-0452",
            "country": "Jersey"
        },
        "avatar": "https://avatars.githubusercontent.com/u/39536062",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1dcd61a1-f99a-4b3c-b210-371c7bc037ad",
        "name": "Marianne Bogan",
        "title": "Lead Accounts Executive",
        "address": {
            "street": "46754 Nicole Flat",
            "city": "North Adellahaven",
            "state": "West Virginia",
            "zip": "35355",
            "country": "France"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/83.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "352a1327-3280-4de3-a363-32d2ca8daca0",
        "name": "Elaine Hane",
        "title": "Regional Optimization Officer",
        "address": {
            "street": "10608 Hauck Burgs",
            "city": "Port Virgilfield",
            "state": "Connecticut",
            "zip": "17836-6974",
            "country": "Taiwan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/51612726",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fb4d95a1-01e3-479a-afcb-e032e33ea59e",
        "name": "Rene Emmerich Jr.",
        "title": "Regional Factors Officer",
        "address": {
            "street": "459 Hardy Curve",
            "city": "Boehmside",
            "state": "Pennsylvania",
            "zip": "41961",
            "country": "Mauritius"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/106.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0d4fb8d2-ff14-4e3c-8b4d-3b14c4eac0b7",
        "name": "Dr. Frankie Reinger",
        "title": "District Integration Administrator",
        "address": {
            "street": "457 Lila Via",
            "city": "Beckerhaven",
            "state": "Wyoming",
            "zip": "40222",
            "country": "Niue"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/318.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4f19386e-a395-4698-95ff-4e878952c0f3",
        "name": "Kathy Zboncak-Heidenreich III",
        "title": "Senior Intranet Technician",
        "address": {
            "street": "4255 Haley Walks",
            "city": "Abshirestead",
            "state": "Oklahoma",
            "zip": "69928",
            "country": "Saint Barthelemy"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/591.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0dd21d0c-c368-4dd2-84ac-02a8d5eb3aa5",
        "name": "Gladys Lakin",
        "title": "International Directives Specialist",
        "address": {
            "street": "23897 Efren Ranch",
            "city": "Kertzmannstead",
            "state": "Oregon",
            "zip": "52670",
            "country": "Lao People's Democratic Republic"
        },
        "avatar": "https://avatars.githubusercontent.com/u/47621391",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ea43f1c8-c052-4349-ac48-1c1000907ba4",
        "name": "Maria Kulas V",
        "title": "Forward Metrics Director",
        "address": {
            "street": "14801 Bahringer Curve",
            "city": "Lake Clinton",
            "state": "Oregon",
            "zip": "76594-3443",
            "country": "Reunion"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1058.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "834a4021-c3d9-48fa-8253-d08920015442",
        "name": "Israel Klocko",
        "title": "Internal Response Coordinator",
        "address": {
            "street": "37727 Maya Walks",
            "city": "Mattieville",
            "state": "Illinois",
            "zip": "10852",
            "country": "Venezuela"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1088.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2480744e-4c05-46e4-8dde-ecb7ac6dcce4",
        "name": "Dr. Rachel Gutkowski-Lowe",
        "title": "Future Division Producer",
        "address": {
            "street": "407 Kohler Center",
            "city": "New Lauretta",
            "state": "Arizona",
            "zip": "88446",
            "country": "Turks and Caicos Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/719.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "184d4d7c-98eb-481d-a4e6-4490d194cef9",
        "name": "Angie Hessel",
        "title": "Senior Security Developer",
        "address": {
            "street": "96570 Gwendolyn Plaza",
            "city": "Olsonland",
            "state": "Wyoming",
            "zip": "63094-0896",
            "country": "North Macedonia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/13281431",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "82d16fcb-ed5c-4f9f-bc36-ef86dca72f3a",
        "name": "Dixie Olson",
        "title": "Principal Markets Assistant",
        "address": {
            "street": "96804 Reinger Orchard",
            "city": "Council Bluffs",
            "state": "North Carolina",
            "zip": "25228",
            "country": "Faroe Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1235.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "602b3641-e5eb-43b1-b716-4b3182e8375d",
        "name": "Francisco Boyle",
        "title": "Customer Quality Strategist",
        "address": {
            "street": "360 Stefan Cliff",
            "city": "Bel Air South",
            "state": "Minnesota",
            "zip": "81237",
            "country": "Togo"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/10.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "bff892b0-ebb8-4644-a7b5-c00678b98346",
        "name": "Lucia Russel",
        "title": "Global Mobility Developer",
        "address": {
            "street": "18356 Altenwerth Common",
            "city": "Lake Lanceton",
            "state": "Washington",
            "zip": "05972",
            "country": "Cayman Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/71744622",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0e1cd95f-bcbd-43a0-a3b3-4a9b031615cd",
        "name": "Beth Parisian DDS",
        "title": "Dynamic Creative Strategist",
        "address": {
            "street": "75229 Crona Wall",
            "city": "Palm Harbor",
            "state": "Tennessee",
            "zip": "29251-1941",
            "country": "Cayman Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/491.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a659bcb6-bff9-4e7f-b148-4d6204084d76",
        "name": "Louise Stamm",
        "title": "Product Response Agent",
        "address": {
            "street": "34954 Gudrun Camp",
            "city": "Livermore",
            "state": "Hawaii",
            "zip": "13337",
            "country": "Heard Island and McDonald Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/64922677",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c39220e4-3b2c-4dc3-b38a-bcc388a081ac",
        "name": "Stella Ebert",
        "title": "Global Integration Orchestrator",
        "address": {
            "street": "925 Haag Loaf",
            "city": "Lake Charles",
            "state": "Rhode Island",
            "zip": "35574",
            "country": "Bangladesh"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1053.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8f76a42b-5203-425b-b118-e3f444bed56d",
        "name": "Dr. Timothy Stanton-Hilll",
        "title": "Human Mobility Facilitator",
        "address": {
            "street": "5114 Block Cape",
            "city": "Buckeye",
            "state": "Wyoming",
            "zip": "39548-0182",
            "country": "Pitcairn Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/60238587",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7af9e078-7147-410c-b418-bddfd6eacf1e",
        "name": "Barry Murazik V",
        "title": "Central Metrics Liaison",
        "address": {
            "street": "4293 Waters Track",
            "city": "North Geoshire",
            "state": "New York",
            "zip": "55787-6276",
            "country": "Gambia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/87557033",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4c9b779c-130f-4530-a236-104c43149f71",
        "name": "Christopher Johnson",
        "title": "Senior Directives Associate",
        "address": {
            "street": "4169 Trisha Corners",
            "city": "North Monaburgh",
            "state": "Oregon",
            "zip": "35955",
            "country": "Afghanistan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1220.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4457487d-9ca3-41ed-8410-6e8f24103924",
        "name": "Crystal Mitchell",
        "title": "Investor Usability Executive",
        "address": {
            "street": "843 Torphy Centers",
            "city": "Fort Cesar",
            "state": "Arizona",
            "zip": "07433-9907",
            "country": "Togo"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/515.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c434bb86-be95-46c5-9821-ca2e0a4ebffc",
        "name": "Lowell Rice",
        "title": "Direct Group Producer",
        "address": {
            "street": "5301 Marlin Roads",
            "city": "Port Dakota",
            "state": "Vermont",
            "zip": "86959",
            "country": "Montserrat"
        },
        "avatar": "https://avatars.githubusercontent.com/u/50057327",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b0a001e1-c25c-4e40-ba5f-96b618018e32",
        "name": "Lucia Kessler",
        "title": "Principal Functionality Manager",
        "address": {
            "street": "35300 Heidenreich Club",
            "city": "Andersoncester",
            "state": "Nevada",
            "zip": "10026-1794",
            "country": "Venezuela"
        },
        "avatar": "https://avatars.githubusercontent.com/u/63099865",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ca1ff82d-f5cd-4917-9e0c-ff19aab75752",
        "name": "Mr. Francis Pollich",
        "title": "Product Response Consultant",
        "address": {
            "street": "5581 Rohan Summit",
            "city": "Demarioside",
            "state": "New Hampshire",
            "zip": "51383",
            "country": "French Guiana"
        },
        "avatar": "https://avatars.githubusercontent.com/u/71741923",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "811fdd14-fd83-4cd2-9472-a0f0249b2772",
        "name": "Linda Langosh III",
        "title": "Regional Communications Facilitator",
        "address": {
            "street": "71194 O'Hara Glens",
            "city": "North Lauderdale",
            "state": "New Mexico",
            "zip": "52134",
            "country": "Zimbabwe"
        },
        "avatar": "https://avatars.githubusercontent.com/u/16527718",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1ad92b7b-a161-4be6-b4ec-d63cd2bb5068",
        "name": "Becky Will",
        "title": "Direct Functionality Supervisor",
        "address": {
            "street": "322 Auer Coves",
            "city": "O'Reillyburgh",
            "state": "Michigan",
            "zip": "17038-6345",
            "country": "Saint Martin"
        },
        "avatar": "https://avatars.githubusercontent.com/u/46699944",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "bcb57c62-b00b-4fdb-8976-b78eddc410c1",
        "name": "Miss Maxine Franey",
        "title": "Dynamic Quality Director",
        "address": {
            "street": "57226 Mallie Mount",
            "city": "Rowanland",
            "state": "Connecticut",
            "zip": "64895-0951",
            "country": "Bhutan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/83747850",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c4e449f3-e28b-4e52-adc5-6a28a6335885",
        "name": "Mr. Bennie Schaefer",
        "title": "Chief Security Agent",
        "address": {
            "street": "1875 Mayert Springs",
            "city": "Devencester",
            "state": "New Mexico",
            "zip": "61200",
            "country": "Monaco"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/640.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f39867d3-1469-4461-ae98-f0c75e5c648e",
        "name": "Tonya West",
        "title": "Forward Interactions Engineer",
        "address": {
            "street": "434 Kris Ville",
            "city": "Normal",
            "state": "Oregon",
            "zip": "41954",
            "country": "Mozambique"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1042.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b706b0d7-7feb-4a06-833c-cd8551047d0e",
        "name": "Marianne Windler",
        "title": "District Tactics Engineer",
        "address": {
            "street": "65670 Horace Track",
            "city": "Wildermanworth",
            "state": "Hawaii",
            "zip": "07272-2853",
            "country": "Malawi"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/649.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ff71570a-eaf5-4fb3-9da0-69b548a36e04",
        "name": "Kent Kulas V",
        "title": "Direct Directives Strategist",
        "address": {
            "street": "9116 Mann Gardens",
            "city": "North Eleanora",
            "state": "Wisconsin",
            "zip": "05758",
            "country": "Bosnia and Herzegovina"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1055.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e70499ba-b950-4a57-869f-69edf06213c9",
        "name": "Wesley Mertz",
        "title": "Central Paradigm Associate",
        "address": {
            "street": "731 Kiehn Dam",
            "city": "South Estell",
            "state": "Wyoming",
            "zip": "07181-5487",
            "country": "Tanzania"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/136.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3abc8fbf-9469-4c14-bee1-8b8465028adf",
        "name": "Gilberto Adams",
        "title": "Principal Mobility Architect",
        "address": {
            "street": "822 Birdie Flats",
            "city": "Lake Margretberg",
            "state": "Rhode Island",
            "zip": "52626-3591",
            "country": "Senegal"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/667.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "503ec790-31c4-4500-8013-a64e4d723346",
        "name": "Miss Brooke Kautzer-Jast",
        "title": "Legacy Research Specialist",
        "address": {
            "street": "581 Hermann Pine",
            "city": "Mauriceworth",
            "state": "Oregon",
            "zip": "20286",
            "country": "Austria"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/562.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6cd5eb34-ab2b-488c-9207-ea074ea83332",
        "name": "Estelle Schulist",
        "title": "Product Creative Manager",
        "address": {
            "street": "2949 Cade Crescent",
            "city": "Port Emilio",
            "state": "Michigan",
            "zip": "32509",
            "country": "Sierra Leone"
        },
        "avatar": "https://avatars.githubusercontent.com/u/47618827",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1d6ddc64-4c30-4bdb-bc8a-127f4f710711",
        "name": "Mona Prosacco",
        "title": "District Implementation Producer",
        "address": {
            "street": "3558 Wuckert Forest",
            "city": "Lake Casandraborough",
            "state": "Missouri",
            "zip": "28494-0845",
            "country": "Kenya"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/568.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9e38a7f6-c1f1-4fef-affc-e1f438989784",
        "name": "Roxanne Farrell",
        "title": "National Intranet Strategist",
        "address": {
            "street": "236 Elena Falls",
            "city": "Fort Irwinbury",
            "state": "California",
            "zip": "73942-9701",
            "country": "Saint Barthelemy"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/384.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8453802e-e9e4-4bc7-a42a-967f05f90b02",
        "name": "Mr. Julian Franey",
        "title": "District Group Architect",
        "address": {
            "street": "71733 Hagenes Radial",
            "city": "Ferryfort",
            "state": "Arizona",
            "zip": "32402",
            "country": "Eswatini"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1174.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "eb2d87dd-ae71-48b4-b68a-feae9a4780b8",
        "name": "Darlene Erdman-Langosh PhD",
        "title": "Lead Paradigm Associate",
        "address": {
            "street": "794 Jennings Inlet",
            "city": "Texas City",
            "state": "North Carolina",
            "zip": "28573",
            "country": "Slovenia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/611.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2ad6a766-ffa1-4b74-9e33-d2c7e3b2c760",
        "name": "Javier Schumm",
        "title": "Corporate Program Associate",
        "address": {
            "street": "904 Corwin Fall",
            "city": "Lake Estefania",
            "state": "Delaware",
            "zip": "58649-1719",
            "country": "Cyprus"
        },
        "avatar": "https://avatars.githubusercontent.com/u/35320867",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d624cd68-b4d3-44b7-87eb-635ed55fd650",
        "name": "Mary Johnston",
        "title": "National Infrastructure Developer",
        "address": {
            "street": "793 Colton Plaza",
            "city": "South Johannton",
            "state": "Kansas",
            "zip": "37071-3421",
            "country": "Zambia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/704.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6e5959ba-9b44-4bf6-acfc-1aae7e9a9370",
        "name": "Angie Pacocha",
        "title": "Dynamic Division Associate",
        "address": {
            "street": "4072 Dooley Mountain",
            "city": "Edmundville",
            "state": "Vermont",
            "zip": "71937",
            "country": "Niger"
        },
        "avatar": "https://avatars.githubusercontent.com/u/54680372",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9ad01118-ad81-4905-b328-1cde7d2cedf8",
        "name": "Marlon Nader",
        "title": "Lead Security Coordinator",
        "address": {
            "street": "8908 Wilton Hills",
            "city": "Fort Heidi",
            "state": "Hawaii",
            "zip": "34035",
            "country": "Monaco"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1036.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3b0b8fae-ad94-410c-b613-dbe327bfd41b",
        "name": "Mike Gutkowski",
        "title": "Internal Communications Strategist",
        "address": {
            "street": "7788 Daugherty Bypass",
            "city": "Emmerichtown",
            "state": "Rhode Island",
            "zip": "45928-0220",
            "country": "Eritrea"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/351.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2577e8c2-62b7-40f3-ad30-56e6d922ebda",
        "name": "Laurie O'Connell",
        "title": "Legacy Division Manager",
        "address": {
            "street": "3932 Brando Hills",
            "city": "Port Lonzo",
            "state": "North Dakota",
            "zip": "46799-4203",
            "country": "Australia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/913.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3662fbc4-67b0-484c-8db8-249576af23c2",
        "name": "Desiree Thompson IV",
        "title": "Global Brand Specialist",
        "address": {
            "street": "5229 Nolan Club",
            "city": "Gusikowskihaven",
            "state": "Indiana",
            "zip": "95174",
            "country": "Heard Island and McDonald Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/262.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "59d7edd8-20c4-477f-9d74-0cf40a80d641",
        "name": "Gwen Leuschke",
        "title": "Internal Operations Planner",
        "address": {
            "street": "80300 Larson Shoals",
            "city": "Casperview",
            "state": "Maryland",
            "zip": "98027",
            "country": "Germany"
        },
        "avatar": "https://avatars.githubusercontent.com/u/69904151",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b6bcc447-e458-4a7c-bceb-e44c8d97c3e2",
        "name": "Terrell Gislason",
        "title": "Direct Intranet Analyst",
        "address": {
            "street": "223 Deckow Ramp",
            "city": "Dunwoody",
            "state": "Mississippi",
            "zip": "60299",
            "country": "Moldova"
        },
        "avatar": "https://avatars.githubusercontent.com/u/22502861",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7b512416-e37e-495a-92ff-ad94135d8719",
        "name": "Mrs. Ana Bashirian V",
        "title": "District Creative Strategist",
        "address": {
            "street": "108 Demetris Tunnel",
            "city": "Brentwood",
            "state": "Maine",
            "zip": "87234-0927",
            "country": "Micronesia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/921.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3f6e3828-542c-4118-9810-bda2d8456dae",
        "name": "Rosie Rutherford-McLaughlin",
        "title": "Future Security Engineer",
        "address": {
            "street": "352 Sporer Spur",
            "city": "West Ike",
            "state": "Texas",
            "zip": "07516-0043",
            "country": "Israel"
        },
        "avatar": "https://avatars.githubusercontent.com/u/49628829",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b48ccd9d-9d7e-4544-9c0f-548b885f97e9",
        "name": "Vicki Vandervort PhD",
        "title": "International Brand Assistant",
        "address": {
            "street": "54290 Loyal Tunnel",
            "city": "East Lucio",
            "state": "Arkansas",
            "zip": "58658",
            "country": "Aland Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/150.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "71e5d6df-9742-4794-b8a5-e2f6dd64729e",
        "name": "Matthew Kautzer",
        "title": "Internal Program Officer",
        "address": {
            "street": "342 Shanna Light",
            "city": "East Emileberg",
            "state": "Iowa",
            "zip": "32206",
            "country": "Puerto Rico"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/929.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7a186a13-8c89-4980-a99b-db4d506df322",
        "name": "Clinton Swaniawski-Koch",
        "title": "Central Research Officer",
        "address": {
            "street": "783 Doyle Club",
            "city": "Port Domenicachester",
            "state": "Delaware",
            "zip": "01394-7537",
            "country": "Panama"
        },
        "avatar": "https://avatars.githubusercontent.com/u/88574844",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5f989eef-aaba-477f-85ec-76fd884696e1",
        "name": "Alexis Rowe V",
        "title": "Senior Program Administrator",
        "address": {
            "street": "36990 Brakus Points",
            "city": "Port Odessa",
            "state": "Nevada",
            "zip": "92405",
            "country": "Guam"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1173.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "384d6961-9260-4d7b-a43e-355488d637ac",
        "name": "Felicia Rosenbaum",
        "title": "Legacy Implementation Manager",
        "address": {
            "street": "13167 Ophelia Mount",
            "city": "West Mac",
            "state": "Georgia",
            "zip": "91184-0314",
            "country": "Ukraine"
        },
        "avatar": "https://avatars.githubusercontent.com/u/20413110",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6111c657-be02-44ab-a56f-56ae880a3e86",
        "name": "Ronnie Bergstrom",
        "title": "National Usability Analyst",
        "address": {
            "street": "594 Nola Crescent",
            "city": "West Caroline",
            "state": "New York",
            "zip": "33018-3498",
            "country": "Pitcairn Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/14262997",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c102fd5b-fe2c-4515-b543-2059e4880396",
        "name": "Herbert Hoppe",
        "title": "Lead Marketing Planner",
        "address": {
            "street": "96446 Chaim Points",
            "city": "Port Marlenmouth",
            "state": "Colorado",
            "zip": "58468-2308",
            "country": "Czechia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1108.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b7a24cb9-c494-4a95-89d8-e8d940fc40f8",
        "name": "Santos Harber",
        "title": "Regional Brand Executive",
        "address": {
            "street": "13724 Miller Mall",
            "city": "Dorisland",
            "state": "Alabama",
            "zip": "44962-9811",
            "country": "Bolivia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/6323759",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "cf60f1ef-17c6-4e4e-b260-2b48f61b3871",
        "name": "Dr. Saul Buckridge",
        "title": "Direct Group Executive",
        "address": {
            "street": "515 Marjolaine Port",
            "city": "New Allen",
            "state": "Rhode Island",
            "zip": "67245",
            "country": "Pakistan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/930.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1bc1d752-0b89-4df7-afb4-3ec60c305034",
        "name": "Virginia Corwin III",
        "title": "Future Metrics Orchestrator",
        "address": {
            "street": "786 Halie Inlet",
            "city": "West Vernice",
            "state": "Pennsylvania",
            "zip": "23436-4636",
            "country": "Georgia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/97342850",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1ec8ab54-229d-4638-8535-5905b217a93b",
        "name": "Kent Legros",
        "title": "Future Operations Consultant",
        "address": {
            "street": "578 Bartell Spurs",
            "city": "West Gardnerburgh",
            "state": "Rhode Island",
            "zip": "32427-7733",
            "country": "Qatar"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/997.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "05110ea3-5982-48b1-9ef3-3eb655921165",
        "name": "Ms. Sonya Cummerata",
        "title": "District Paradigm Assistant",
        "address": {
            "street": "289 Trantow Alley",
            "city": "East Al",
            "state": "Rhode Island",
            "zip": "15593",
            "country": "Mauritius"
        },
        "avatar": "https://avatars.githubusercontent.com/u/73874278",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6be432af-2820-4f2b-a8fa-9d939fc3a3f4",
        "name": "Mrs. Leticia Lubowitz",
        "title": "International Factors Planner",
        "address": {
            "street": "76031 Schamberger River",
            "city": "West Ramonstad",
            "state": "Kansas",
            "zip": "22254-6547",
            "country": "Democratic People's Republic of Korea"
        },
        "avatar": "https://avatars.githubusercontent.com/u/81311911",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5804296a-3974-451a-9b6d-9b5b168f098a",
        "name": "Mark Veum",
        "title": "Corporate Identity Specialist",
        "address": {
            "street": "242 O'Hara Viaduct",
            "city": "Kihnton",
            "state": "Massachusetts",
            "zip": "81554",
            "country": "Saint Helena"
        },
        "avatar": "https://avatars.githubusercontent.com/u/19710046",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c68ba3e5-be40-45e6-bfd7-47572d901f10",
        "name": "Tabitha McDermott",
        "title": "Chief Directives Orchestrator",
        "address": {
            "street": "56774 Collier Plaza",
            "city": "Lake Aylinberg",
            "state": "Rhode Island",
            "zip": "96061-9651",
            "country": "Algeria"
        },
        "avatar": "https://avatars.githubusercontent.com/u/71559059",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5b9c6502-0cef-4a12-9ea2-d4a20be1d369",
        "name": "Dominic Considine",
        "title": "Lead Identity Officer",
        "address": {
            "street": "7684 Novella Manor",
            "city": "Deloresbury",
            "state": "Idaho",
            "zip": "31035-3720",
            "country": "Bangladesh"
        },
        "avatar": "https://avatars.githubusercontent.com/u/74399860",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "bf1d5aae-5094-421c-92f8-80172f0d28a3",
        "name": "Jason Ryan",
        "title": "Future Data Administrator",
        "address": {
            "street": "769 Gottlieb Isle",
            "city": "Aliso Viejo",
            "state": "New Mexico",
            "zip": "28491",
            "country": "Palau"
        },
        "avatar": "https://avatars.githubusercontent.com/u/32749374",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "50831937-d571-4708-b0a8-e663978dcf16",
        "name": "Blanca Spinka",
        "title": "Human Implementation Engineer",
        "address": {
            "street": "7233 Kshlerin Harbors",
            "city": "Williamfort",
            "state": "Rhode Island",
            "zip": "62157",
            "country": "Northern Mariana Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/722.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3275d5c4-f130-494c-8590-c7ed51a77bc3",
        "name": "Homer Herman",
        "title": "Human Creative Executive",
        "address": {
            "street": "26824 Schuyler Key",
            "city": "East Maxwell",
            "state": "Oregon",
            "zip": "36545-2638",
            "country": "Cocos (Keeling) Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/558.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "acd47f72-d429-45cd-b093-7e242f0793c0",
        "name": "Bert Bailey",
        "title": "Direct Brand Specialist",
        "address": {
            "street": "4337 Kozey Crossing",
            "city": "Hattiesburg",
            "state": "Rhode Island",
            "zip": "43468",
            "country": "Saint Vincent and the Grenadines"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1201.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "af19d578-d2e0-4791-93e9-9917b5f3456e",
        "name": "Eduardo Schultz",
        "title": "Future Directives Technician",
        "address": {
            "street": "1119 Myron Shoals",
            "city": "Lake Tristian",
            "state": "Massachusetts",
            "zip": "09918",
            "country": "Belize"
        },
        "avatar": "https://avatars.githubusercontent.com/u/41399336",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d1adf6d1-cb08-4980-8510-8a10917ef7a3",
        "name": "Rick Beatty V",
        "title": "Internal Research Planner",
        "address": {
            "street": "524 Shanie Land",
            "city": "South Soledadtown",
            "state": "Kansas",
            "zip": "00827",
            "country": "Sweden"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/143.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "47ef4b0d-0755-410a-ad5e-73673b5419b2",
        "name": "Mr. Luther Hilll",
        "title": "Corporate Optimization Strategist",
        "address": {
            "street": "686 Mosciski Coves",
            "city": "Oxnard",
            "state": "Minnesota",
            "zip": "58894",
            "country": "Solomon Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/4133211",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "999b2104-8568-4095-9ae4-768f10773795",
        "name": "Carmen Langworth DVM",
        "title": "Product Quality Agent",
        "address": {
            "street": "77023 Bechtelar Route",
            "city": "Auerville",
            "state": "West Virginia",
            "zip": "14672",
            "country": "Guadeloupe"
        },
        "avatar": "https://avatars.githubusercontent.com/u/72261623",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "da3eea88-ea93-423f-b85d-c59818a5b3b7",
        "name": "Wm Ferry-Conn II",
        "title": "Future Division Liaison",
        "address": {
            "street": "606 Harber Heights",
            "city": "Micahborough",
            "state": "Kentucky",
            "zip": "54378-3440",
            "country": "Japan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1087.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "27cf315e-c8f2-40cd-aa67-c0b999d07406",
        "name": "Lois Wisozk",
        "title": "Global Usability Manager",
        "address": {
            "street": "86608 Smitham Forks",
            "city": "North Fredericworth",
            "state": "Texas",
            "zip": "24752-4768",
            "country": "Hungary"
        },
        "avatar": "https://avatars.githubusercontent.com/u/72300282",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3688b850-b3b5-41ad-9679-5d7d4febb369",
        "name": "Clyde Heaney",
        "title": "Principal Research Engineer",
        "address": {
            "street": "9175 Rohan Crossing",
            "city": "North Nestor",
            "state": "North Carolina",
            "zip": "44686",
            "country": "Bhutan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "447338ef-ca3d-4e8a-9cb7-7d6fb0860a78",
        "name": "Kristy Swaniawski",
        "title": "Regional Mobility Technician",
        "address": {
            "street": "197 Kshlerin Trail",
            "city": "South Zeldaside",
            "state": "Minnesota",
            "zip": "95961",
            "country": "Mongolia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/18475748",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "755958c8-4a0f-43eb-a3a5-227eaf4eb843",
        "name": "Jeff Kertzmann",
        "title": "International Integration Coordinator",
        "address": {
            "street": "8639 Celia Wells",
            "city": "Hermannview",
            "state": "Vermont",
            "zip": "56968-2939",
            "country": "Yemen"
        },
        "avatar": "https://avatars.githubusercontent.com/u/56205717",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7a9c7c4d-6dd0-4d86-8841-1ae6c377b8ce",
        "name": "Tyrone Koelpin",
        "title": "Future Usability Consultant",
        "address": {
            "street": "4450 Fidel Gardens",
            "city": "Port Delpha",
            "state": "Utah",
            "zip": "04193-4337",
            "country": "Australia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1168.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d3bc3754-6e7a-4e93-8408-10f0f153f470",
        "name": "Curtis Larson DDS",
        "title": "Lead Paradigm Representative",
        "address": {
            "street": "3051 Conroy Cove",
            "city": "San Buenaventura (Ventura)",
            "state": "Alaska",
            "zip": "62729-9158",
            "country": "Reunion"
        },
        "avatar": "https://avatars.githubusercontent.com/u/54817528",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6100a1e9-9a66-44eb-9e4a-fb0880f47e52",
        "name": "Randolph Huel",
        "title": "Human Mobility Coordinator",
        "address": {
            "street": "6226 Bruen Courts",
            "city": "West Orashire",
            "state": "Arizona",
            "zip": "84261",
            "country": "Lithuania"
        },
        "avatar": "https://avatars.githubusercontent.com/u/86662174",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "076db74c-8306-4df3-8e76-0ead63aacf5c",
        "name": "Casey Herman",
        "title": "Internal Brand Manager",
        "address": {
            "street": "93445 Greenholt Stravenue",
            "city": "North Orville",
            "state": "Georgia",
            "zip": "95258-8849",
            "country": "Egypt"
        },
        "avatar": "https://avatars.githubusercontent.com/u/41076828",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a43748f1-d3dd-45cb-950e-82ea95f8314b",
        "name": "Marguerite Monahan III",
        "title": "Internal Markets Facilitator",
        "address": {
            "street": "730 Murazik Ferry",
            "city": "West Nicostad",
            "state": "New Hampshire",
            "zip": "27007-6916",
            "country": "Vanuatu"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/620.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "89527961-600a-498b-8d21-e58d5c7c6b1c",
        "name": "Regina Jacobs",
        "title": "Central Mobility Analyst",
        "address": {
            "street": "1161 McClure Throughway",
            "city": "Lake Kameronhaven",
            "state": "South Carolina",
            "zip": "33389",
            "country": "Eswatini"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/791.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "18fecc68-e46d-4362-a61e-65399f39b74d",
        "name": "Ms. Elena Rutherford",
        "title": "District Data Director",
        "address": {
            "street": "7518 Wiegand Locks",
            "city": "Brownhaven",
            "state": "Utah",
            "zip": "01565",
            "country": "Yemen"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/857.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f0ef9960-1bb4-45a6-9e74-79096df6b6ee",
        "name": "Dr. Franklin Reinger",
        "title": "Direct Functionality Technician",
        "address": {
            "street": "1698 Bo Lodge",
            "city": "Lake Maziechester",
            "state": "Nebraska",
            "zip": "43388-9288",
            "country": "Guinea"
        },
        "avatar": "https://avatars.githubusercontent.com/u/10579964",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e270130e-aec2-41d3-b96d-bff6440b0baf",
        "name": "Natalie Kub",
        "title": "Direct Accountability Associate",
        "address": {
            "street": "5385 Brendon Forges",
            "city": "East Maximo",
            "state": "Iowa",
            "zip": "30848-5763",
            "country": "Lesotho"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1184.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "08e80432-0651-4a5f-8219-29ecaaa23c33",
        "name": "Darnell Reinger",
        "title": "Future Division Agent",
        "address": {
            "street": "18345 Wuckert Pike",
            "city": "Leannside",
            "state": "Iowa",
            "zip": "80884-8157",
            "country": "Bahrain"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/577.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fde0ffdd-4f8c-4a5e-b224-bcc671bcdaff",
        "name": "Justin Stark",
        "title": "Future Applications Developer",
        "address": {
            "street": "68064 O'Reilly Locks",
            "city": "West Rooseveltshire",
            "state": "Louisiana",
            "zip": "28797-8439",
            "country": "Slovenia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1156.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "552f58d0-678a-43b7-8127-a0a4191fde26",
        "name": "Lee Huels",
        "title": "Legacy Operations Representative",
        "address": {
            "street": "9056 Drew Point",
            "city": "North Kirkfurt",
            "state": "Indiana",
            "zip": "68502-8973",
            "country": "Iceland"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/31.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "55349844-6786-41c3-a8c2-84998954ea83",
        "name": "Blake Vandervort",
        "title": "Human Applications Agent",
        "address": {
            "street": "712 Malachi Mills",
            "city": "Olestead",
            "state": "Colorado",
            "zip": "54434-4715",
            "country": "Qatar"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1065.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c1c2b3a9-cdeb-4d20-b88b-310476512967",
        "name": "Henrietta Reinger",
        "title": "International Branding Administrator",
        "address": {
            "street": "75674 Huels Lane",
            "city": "South Angeline",
            "state": "Maryland",
            "zip": "15510",
            "country": "Libyan Arab Jamahiriya"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1211.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "26063283-263d-42a0-91df-a0daf96030ac",
        "name": "Jamie Gutkowski",
        "title": "Corporate Accounts Architect",
        "address": {
            "street": "571 Walsh Meadows",
            "city": "North Audreymouth",
            "state": "Indiana",
            "zip": "44082",
            "country": "Guam"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/769.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0d2fa044-5b64-4cca-be59-d09c3e7e7bb4",
        "name": "Irving Kulas",
        "title": "Human Security Strategist",
        "address": {
            "street": "2990 Sally Path",
            "city": "Weissnatside",
            "state": "Colorado",
            "zip": "52360",
            "country": "French Polynesia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/93272974",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "056b93d8-bb06-4fe3-a46f-079742a804b5",
        "name": "Cesar Torp",
        "title": "Direct Directives Supervisor",
        "address": {
            "street": "514 Gerardo Union",
            "city": "Gloverfort",
            "state": "Indiana",
            "zip": "64777-8939",
            "country": "Sweden"
        },
        "avatar": "https://avatars.githubusercontent.com/u/25914204",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "10c2abd3-e35c-4981-9385-df6045e42efa",
        "name": "Grady Feest",
        "title": "Legacy Division Liaison",
        "address": {
            "street": "9458 Hank Pine",
            "city": "West Jenaworth",
            "state": "Oklahoma",
            "zip": "75682-1306",
            "country": "Turkey"
        },
        "avatar": "https://avatars.githubusercontent.com/u/45820832",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1caf1c25-2bee-44c3-9d27-69a671fa7a8c",
        "name": "Kristina Durgan",
        "title": "Human Marketing Technician",
        "address": {
            "street": "69125 Ryder Center",
            "city": "South Dorotheaside",
            "state": "Iowa",
            "zip": "28997-6029",
            "country": "Italy"
        },
        "avatar": "https://avatars.githubusercontent.com/u/87230088",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ca346747-8c47-4480-a9b1-afffdfde9130",
        "name": "Oscar Nikolaus-Labadie DDS",
        "title": "International Quality Strategist",
        "address": {
            "street": "991 Leonora Glen",
            "city": "Gulfport",
            "state": "Pennsylvania",
            "zip": "84690-5528",
            "country": "Bahrain"
        },
        "avatar": "https://avatars.githubusercontent.com/u/90080130",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7a721b66-252e-4f22-828c-ed4cba56fa6e",
        "name": "Rose Vandervort",
        "title": "International Marketing Associate",
        "address": {
            "street": "76746 Vickie Corners",
            "city": "Boscostead",
            "state": "Indiana",
            "zip": "71272",
            "country": "Puerto Rico"
        },
        "avatar": "https://avatars.githubusercontent.com/u/49668001",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d4cbdd5f-036e-4152-b3e0-b8dc07f6fae1",
        "name": "Bert Rolfson",
        "title": "Product Quality Officer",
        "address": {
            "street": "4760 Margarita Circle",
            "city": "New Jeremieberg",
            "state": "North Dakota",
            "zip": "24607-3461",
            "country": "Saint Kitts and Nevis"
        },
        "avatar": "https://avatars.githubusercontent.com/u/70091535",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e3ee3c95-dfff-4155-a1b9-b9a96b86d4b8",
        "name": "Douglas Mohr-Schuster",
        "title": "Forward Creative Engineer",
        "address": {
            "street": "18962 Runolfsdottir Shores",
            "city": "Zachariahshire",
            "state": "New York",
            "zip": "53742",
            "country": "South Sudan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/738.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2bfb7e1c-ae0e-4785-8c8d-ac212c026279",
        "name": "Carol Walsh",
        "title": "Corporate Applications Technician",
        "address": {
            "street": "92756 Hilll Extension",
            "city": "East Fredericton",
            "state": "Tennessee",
            "zip": "47236",
            "country": "Uganda"
        },
        "avatar": "https://avatars.githubusercontent.com/u/51840872",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "854aa2d1-fb7f-45ce-9a28-c9843b10c0d1",
        "name": "Opal Blanda",
        "title": "Corporate Integration Orchestrator",
        "address": {
            "street": "36766 Lowell Hills",
            "city": "Elmhurst",
            "state": "Oregon",
            "zip": "22142",
            "country": "Wallis and Futuna"
        },
        "avatar": "https://avatars.githubusercontent.com/u/85459653",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6f1411ff-6050-4aff-abf9-6845f7d5de36",
        "name": "Miss Kristina Miller III",
        "title": "Senior Identity Coordinator",
        "address": {
            "street": "7275 Wiza Plains",
            "city": "Fort Smith",
            "state": "Oregon",
            "zip": "70346-5883",
            "country": "Montenegro"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1058.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0c4b6278-00a9-46e5-b950-97d8c7faaab6",
        "name": "Jeremiah Welch",
        "title": "Senior Web Executive",
        "address": {
            "street": "8897 Kautzer Way",
            "city": "South Destany",
            "state": "South Dakota",
            "zip": "68448-4221",
            "country": "Costa Rica"
        },
        "avatar": "https://avatars.githubusercontent.com/u/18871222",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a1dcb2c5-6fdc-4396-8442-496451434125",
        "name": "Mr. Mike Bartell",
        "title": "Regional Directives Specialist",
        "address": {
            "street": "167 Duane Wells",
            "city": "South Kolbyfurt",
            "state": "Alabama",
            "zip": "10503",
            "country": "Djibouti"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/129.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e41d974d-5330-4635-82c7-49dcbb8484d2",
        "name": "Forrest Jast Jr.",
        "title": "Global Usability Planner",
        "address": {
            "street": "401 Janessa Ports",
            "city": "South Freddy",
            "state": "Nebraska",
            "zip": "06176",
            "country": "Falkland Islands (Malvinas)"
        },
        "avatar": "https://avatars.githubusercontent.com/u/55075517",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c5622f39-f3ca-443b-9fe9-c94475c8e7dc",
        "name": "Loretta Toy",
        "title": "Customer Applications Producer",
        "address": {
            "street": "51684 Weber Dam",
            "city": "Fort Makayla",
            "state": "Alaska",
            "zip": "54778-5236",
            "country": "El Salvador"
        },
        "avatar": "https://avatars.githubusercontent.com/u/8721227",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "cbde6f5d-5e26-46d7-be97-3cb715ec8bf7",
        "name": "Antonio Rogahn",
        "title": "Human Metrics Strategist",
        "address": {
            "street": "8273 Rath Burgs",
            "city": "Crooksmouth",
            "state": "Nevada",
            "zip": "08743-2449",
            "country": "Senegal"
        },
        "avatar": "https://avatars.githubusercontent.com/u/48918275",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "99b59917-042f-44d8-ad09-0fe7a1ec4258",
        "name": "Josephine Kuphal DVM",
        "title": "District Applications Analyst",
        "address": {
            "street": "409 Romaguera Crescent",
            "city": "Port Violetteberg",
            "state": "New Hampshire",
            "zip": "54378",
            "country": "Monaco"
        },
        "avatar": "https://avatars.githubusercontent.com/u/17812134",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1e909867-5840-4d3a-9e34-f57eef20a8b1",
        "name": "Hattie Kunze",
        "title": "Dynamic Metrics Producer",
        "address": {
            "street": "512 Lesly Spurs",
            "city": "Bakersfield",
            "state": "Iowa",
            "zip": "07275",
            "country": "Namibia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/237.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fbd48311-b92a-4441-940e-538b4b4c900e",
        "name": "Debra Morissette",
        "title": "National Data Developer",
        "address": {
            "street": "4243 Stanton Highway",
            "city": "Fort Roderickview",
            "state": "Texas",
            "zip": "02334-9982",
            "country": "Luxembourg"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/805.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f12eb20a-36f5-4c01-b6ae-daf4d19da07b",
        "name": "Mrs. Betsy Greenholt",
        "title": "Corporate Branding Agent",
        "address": {
            "street": "51386 Charles Path",
            "city": "Blickton",
            "state": "Indiana",
            "zip": "98703",
            "country": "Germany"
        },
        "avatar": "https://avatars.githubusercontent.com/u/96044891",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9d714629-4af7-4ea9-9816-1d776105fdf4",
        "name": "Sheryl Cummings",
        "title": "District Research Developer",
        "address": {
            "street": "6339 Cormier Plains",
            "city": "North Payton",
            "state": "Maine",
            "zip": "94446-0631",
            "country": "Cuba"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/963.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "0df4125f-6301-4eb3-984d-e5b560915a9b",
        "name": "Brandon Bins",
        "title": "Investor Mobility Agent",
        "address": {
            "street": "173 Doyle Parkway",
            "city": "Armanishire",
            "state": "Pennsylvania",
            "zip": "96139",
            "country": "New Caledonia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/5953525",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fe17dcd2-8d30-41e2-bd84-d1f31091fff4",
        "name": "Horace Wisoky",
        "title": "Chief Intranet Developer",
        "address": {
            "street": "5112 Runolfsdottir Bypass",
            "city": "Jacobsmouth",
            "state": "New Jersey",
            "zip": "74234-6799",
            "country": "Holy See (Vatican City State)"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/580.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3f46b9b6-152a-460d-9131-d497236599ea",
        "name": "Dr. Neal Feeney",
        "title": "Lead Infrastructure Developer",
        "address": {
            "street": "2120 Kilback Creek",
            "city": "Grantburgh",
            "state": "Arizona",
            "zip": "65713-7484",
            "country": "Iran"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1099.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "190789b0-8fca-418e-bc0f-0c71b29f2888",
        "name": "Rodolfo McGlynn",
        "title": "Legacy Applications Coordinator",
        "address": {
            "street": "3805 Lehner Route",
            "city": "North Lilianfurt",
            "state": "Rhode Island",
            "zip": "14425-3863",
            "country": "Martinique"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1155.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f40365cb-eee1-4cf2-b765-799f62c28952",
        "name": "Christine Hartmann",
        "title": "District Group Coordinator",
        "address": {
            "street": "88551 Terry Locks",
            "city": "Parker",
            "state": "Delaware",
            "zip": "50599",
            "country": "Djibouti"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/572.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "26d49989-fe49-4008-a4cc-4bc660a4aba1",
        "name": "Lee Price",
        "title": "Product Identity Executive",
        "address": {
            "street": "50672 Eve Alley",
            "city": "Devanfield",
            "state": "Pennsylvania",
            "zip": "58177",
            "country": "Saint Vincent and the Grenadines"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/170.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "296264ef-c2b7-424c-857f-dcbbdc263001",
        "name": "Kay Mann",
        "title": "Product Identity Manager",
        "address": {
            "street": "794 Nader Haven",
            "city": "Albany",
            "state": "Colorado",
            "zip": "86386-6774",
            "country": "Lithuania"
        },
        "avatar": "https://avatars.githubusercontent.com/u/64974610",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ce879314-7a02-448d-b604-ec5f32d1085a",
        "name": "Dr. Blake Bogan",
        "title": "Senior Operations Strategist",
        "address": {
            "street": "63903 Fadel Fall",
            "city": "Daly City",
            "state": "Indiana",
            "zip": "16006",
            "country": "Micronesia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/85536338",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "61f179a3-9fdd-42d3-917e-123b03f49b7c",
        "name": "Clint Rolfson",
        "title": "Principal Division Associate",
        "address": {
            "street": "86500 Kuphal Parkway",
            "city": "South Milan",
            "state": "Wyoming",
            "zip": "94667",
            "country": "Guatemala"
        },
        "avatar": "https://avatars.githubusercontent.com/u/17785507",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "473a1ffd-077b-4c0a-9d55-bb51696752e4",
        "name": "Rosemarie Predovic",
        "title": "Regional Program Producer",
        "address": {
            "street": "72968 Camden Crossroad",
            "city": "Stewartfield",
            "state": "Virginia",
            "zip": "36833-1559",
            "country": "Ecuador"
        },
        "avatar": "https://avatars.githubusercontent.com/u/83663106",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4a8592a2-c135-4a1d-adb2-01c3c7710464",
        "name": "Roberta Reichert MD",
        "title": "Forward Brand Agent",
        "address": {
            "street": "786 Emard Roads",
            "city": "Brakusmouth",
            "state": "Utah",
            "zip": "59274",
            "country": "Benin"
        },
        "avatar": "https://avatars.githubusercontent.com/u/35860681",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2495944b-3747-43c7-aa17-eefe7f9003d1",
        "name": "Brandi MacGyver",
        "title": "Corporate Program Technician",
        "address": {
            "street": "803 Curt Groves",
            "city": "Raynorland",
            "state": "Idaho",
            "zip": "40447",
            "country": "Guinea"
        },
        "avatar": "https://avatars.githubusercontent.com/u/18868553",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fd9b3347-73d5-43bc-9fd6-bd7737f3abc8",
        "name": "Clifton Padberg",
        "title": "International Accounts Consultant",
        "address": {
            "street": "42674 Celia Forks",
            "city": "Lake Ellie",
            "state": "North Carolina",
            "zip": "86508-0493",
            "country": "Tunisia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/211.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a51fad26-8b9e-48b2-a4c0-8837d25ce495",
        "name": "Jack Raynor",
        "title": "International Web Orchestrator",
        "address": {
            "street": "8553 Bruen Tunnel",
            "city": "Redlands",
            "state": "Montana",
            "zip": "84430-1887",
            "country": "Palestine"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/735.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "bcbb4e85-270e-4806-8442-fa05848fe8bc",
        "name": "Pearl Hudson",
        "title": "Principal Data Engineer",
        "address": {
            "street": "8176 Stark Ridges",
            "city": "South Stephaniaborough",
            "state": "Utah",
            "zip": "42940-8186",
            "country": "Saint Martin"
        },
        "avatar": "https://avatars.githubusercontent.com/u/11615764",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "08d6b9fc-b7aa-43bf-b3f6-c9c5752adf8e",
        "name": "Jesus Rippin",
        "title": "Central Operations Planner",
        "address": {
            "street": "28262 Russel Roads",
            "city": "Jenkinsfort",
            "state": "Massachusetts",
            "zip": "55432-0585",
            "country": "Georgia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/985.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "204bb358-7fe2-437c-87b9-4de8a9cf34b8",
        "name": "Benjamin Pagac",
        "title": "Future Interactions Supervisor",
        "address": {
            "street": "15138 Blick Mills",
            "city": "Ceciliaburgh",
            "state": "Virginia",
            "zip": "23082-0457",
            "country": "Oman"
        },
        "avatar": "https://avatars.githubusercontent.com/u/12421103",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "424b7181-2f2a-4f73-8d6f-d88a120c2510",
        "name": "Cindy Funk",
        "title": "Direct Web Supervisor",
        "address": {
            "street": "524 Ondricka Harbors",
            "city": "Shannabury",
            "state": "New York",
            "zip": "08586-9629",
            "country": "Benin"
        },
        "avatar": "https://avatars.githubusercontent.com/u/17505018",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "10baf0b3-5276-466f-b49f-6ba9c896d73d",
        "name": "Lucas Fahey",
        "title": "Corporate Data Orchestrator",
        "address": {
            "street": "73811 Tatum Camp",
            "city": "Fadelworth",
            "state": "Wyoming",
            "zip": "60409-4674",
            "country": "Latvia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/50623476",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "07cec667-e464-4aa0-b669-01fabd8ef394",
        "name": "Brooke Boyle",
        "title": "Internal Program Manager",
        "address": {
            "street": "955 Retta Shoals",
            "city": "Gloverhaven",
            "state": "Texas",
            "zip": "55999-2446",
            "country": "French Guiana"
        },
        "avatar": "https://avatars.githubusercontent.com/u/46861687",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3d3319df-1b86-463b-bb81-7a1ccbdb55e1",
        "name": "Marty Grimes-Wilkinson",
        "title": "Product Creative Architect",
        "address": {
            "street": "206 Brendon Ramp",
            "city": "West Valley City",
            "state": "Florida",
            "zip": "42838",
            "country": "Singapore"
        },
        "avatar": "https://avatars.githubusercontent.com/u/58607035",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "07609422-219c-4be9-85e1-0da257dafa58",
        "name": "Salvador Ryan",
        "title": "Customer Assurance Producer",
        "address": {
            "street": "6559 Shayna Orchard",
            "city": "East Esteban",
            "state": "North Carolina",
            "zip": "99520",
            "country": "Guam"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/482.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "090f0372-4bc8-4e6b-9ac1-fb5bc08be894",
        "name": "Molly Weber DVM",
        "title": "Internal Mobility Orchestrator",
        "address": {
            "street": "55730 McClure Terrace",
            "city": "Heidenreichview",
            "state": "New Mexico",
            "zip": "83994",
            "country": "Romania"
        },
        "avatar": "https://avatars.githubusercontent.com/u/39588222",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5a75fe6c-2fb3-4982-bb49-f3e25011163f",
        "name": "Brittany Kerluke II",
        "title": "Chief Directives Orchestrator",
        "address": {
            "street": "680 Cormier Place",
            "city": "Vicentefield",
            "state": "Illinois",
            "zip": "65718",
            "country": "Mongolia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/60618728",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f58a04c6-ba8c-4c02-8827-e5b9c25a02ec",
        "name": "Jodi Douglas",
        "title": "Corporate Tactics Assistant",
        "address": {
            "street": "6812 Jenkins Union",
            "city": "Lake Cassidy",
            "state": "Hawaii",
            "zip": "54987",
            "country": "Sweden"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/417.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "71d5d8c7-61d4-4905-8d2d-ee751a353958",
        "name": "Jeannie Collier",
        "title": "Legacy Factors Orchestrator",
        "address": {
            "street": "629 Wuckert Greens",
            "city": "South Helgaland",
            "state": "Florida",
            "zip": "49054",
            "country": "Anguilla"
        },
        "avatar": "https://avatars.githubusercontent.com/u/27571701",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a6b3a358-8f8f-4f23-8e11-268670b5f415",
        "name": "Alex Kshlerin",
        "title": "Corporate Solutions Administrator",
        "address": {
            "street": "93837 Pietro Squares",
            "city": "North Zachery",
            "state": "Colorado",
            "zip": "55077-2812",
            "country": "Oman"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/959.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e85c921b-b239-462e-87e5-1a0a067d12f9",
        "name": "Michael Koepp",
        "title": "Future Security Assistant",
        "address": {
            "street": "15211 Miller Forest",
            "city": "Bend",
            "state": "Nebraska",
            "zip": "93071",
            "country": "Yemen"
        },
        "avatar": "https://avatars.githubusercontent.com/u/70453540",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5f049355-c597-494c-ac35-e37d10101a87",
        "name": "Steve Marquardt",
        "title": "Chief Research Administrator",
        "address": {
            "street": "404 Flavio Hills",
            "city": "Aurelioside",
            "state": "Vermont",
            "zip": "15915",
            "country": "Trinidad and Tobago"
        },
        "avatar": "https://avatars.githubusercontent.com/u/54403312",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ac752c08-5686-4fc6-b0ac-1ab6d48134b9",
        "name": "Nichole Mayer",
        "title": "Product Configuration Designer",
        "address": {
            "street": "530 King Curve",
            "city": "Effertzcester",
            "state": "Connecticut",
            "zip": "51406-3031",
            "country": "Dominican Republic"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/384.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7304ea3c-86e6-42b8-a84b-21da95ed6563",
        "name": "Irvin Considine",
        "title": "Lead Infrastructure Agent",
        "address": {
            "street": "522 Bosco Rue",
            "city": "North Isom",
            "state": "Texas",
            "zip": "43004-7244",
            "country": "Tanzania"
        },
        "avatar": "https://avatars.githubusercontent.com/u/76720448",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "aa49442c-01d6-464e-a981-caae2b6485e7",
        "name": "Jeremiah Bailey Sr.",
        "title": "District Accountability Designer",
        "address": {
            "street": "69469 Ankunding Spring",
            "city": "Titusville",
            "state": "California",
            "zip": "78016-9294",
            "country": "Christmas Island"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/639.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1a72df22-517f-4acd-9728-0b1f9ecda5d2",
        "name": "Lester Howe-Pouros",
        "title": "Corporate Usability Consultant",
        "address": {
            "street": "63604 Lueilwitz Circle",
            "city": "Port Alvina",
            "state": "Idaho",
            "zip": "42048",
            "country": "North Macedonia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/689.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f69e8a94-a0f5-4160-8d0f-eb4367283d58",
        "name": "Marianne Watsica",
        "title": "Corporate Group Director",
        "address": {
            "street": "9888 Corkery Corners",
            "city": "Great Falls",
            "state": "Nevada",
            "zip": "75212",
            "country": "Saint Lucia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/45972049",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1073d762-b55c-4ac1-8fb8-688c82927f70",
        "name": "Bryan Tillman",
        "title": "Central Usability Assistant",
        "address": {
            "street": "82183 Kaitlin Ranch",
            "city": "North Antoinettecester",
            "state": "Delaware",
            "zip": "81644-8508",
            "country": "Ecuador"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/822.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c5351d1f-c65a-47d3-a528-a64d3b672246",
        "name": "Armando Kautzer III",
        "title": "Principal Communications Consultant",
        "address": {
            "street": "2042 Lora Freeway",
            "city": "Kassulkefurt",
            "state": "Utah",
            "zip": "43941",
            "country": "Bolivia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1056.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "c28465f0-d337-45ae-aac5-41ccd643efa9",
        "name": "Bernadette Durgan",
        "title": "District Response Orchestrator",
        "address": {
            "street": "59072 Pfannerstill Extension",
            "city": "Tyrahaven",
            "state": "Alaska",
            "zip": "14792-5501",
            "country": "Australia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/639.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "30f38c51-fcbf-437d-bf5f-08f49e9a5fba",
        "name": "Colleen Streich",
        "title": "Corporate Tactics Liaison",
        "address": {
            "street": "463 Ada Viaduct",
            "city": "Davisberg",
            "state": "Ohio",
            "zip": "57195",
            "country": "Lao People's Democratic Republic"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/642.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4bf45355-64bf-403d-bec7-9565c0e9e481",
        "name": "Cedric Kihn",
        "title": "Customer Functionality Administrator",
        "address": {
            "street": "61700 Zack Station",
            "city": "New Alexa",
            "state": "Michigan",
            "zip": "19222-6427",
            "country": "Svalbard & Jan Mayen Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/46.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "92eed222-e6f7-4310-8957-1147333212b9",
        "name": "Ramiro Connelly DVM",
        "title": "Forward Web Analyst",
        "address": {
            "street": "4822 Bogan Grove",
            "city": "Fort Marquesstead",
            "state": "Nebraska",
            "zip": "49514",
            "country": "Qatar"
        },
        "avatar": "https://avatars.githubusercontent.com/u/19761196",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "534155e9-627a-4adb-9c1a-0c7423cf2655",
        "name": "Marcia Johns",
        "title": "Legacy Program Analyst",
        "address": {
            "street": "465 Jerel Terrace",
            "city": "Lake Malvinafield",
            "state": "Kentucky",
            "zip": "46246-8963",
            "country": "Tokelau"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/525.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d7ee02b8-cdbf-4fa4-a25a-1c07097c0c0c",
        "name": "Dominic Stroman",
        "title": "Forward Mobility Assistant",
        "address": {
            "street": "2991 Mohamed Rapid",
            "city": "Macejkovichaven",
            "state": "New Mexico",
            "zip": "23522",
            "country": "Togo"
        },
        "avatar": "https://avatars.githubusercontent.com/u/62699862",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "71ef2000-92ec-4ace-a398-8a7abccdb716",
        "name": "Kenneth Hoeger",
        "title": "Global Group Coordinator",
        "address": {
            "street": "278 Samara Falls",
            "city": "Pueblo",
            "state": "New Hampshire",
            "zip": "76117",
            "country": "Latvia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/589.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "770e87c9-38fd-444b-85cf-88a6dd79126e",
        "name": "Clinton Rath",
        "title": "Direct Solutions Consultant",
        "address": {
            "street": "2190 Mossie Views",
            "city": "Lake Alifort",
            "state": "Kansas",
            "zip": "36873-8147",
            "country": "Japan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/72565555",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "80035231-cb09-4920-9b31-e3e029ef6986",
        "name": "Vivian Gorczany",
        "title": "Principal Functionality Liaison",
        "address": {
            "street": "68862 Kassulke Hollow",
            "city": "New Marc",
            "state": "Oregon",
            "zip": "91356",
            "country": "Egypt"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1111.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6d5e4a1c-3ea0-4410-84f6-b3a4163c296a",
        "name": "Angel Russel",
        "title": "Corporate Functionality Technician",
        "address": {
            "street": "134 Cronin Stravenue",
            "city": "Lake Javonteshire",
            "state": "Maryland",
            "zip": "41979-5531",
            "country": "Bonaire, Sint Eustatius and Saba"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/271.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "095a11f5-c5bd-465c-8927-d9e89eed3538",
        "name": "Hubert Wisozk-Walter",
        "title": "Customer Accountability Orchestrator",
        "address": {
            "street": "5378 Bailey Run",
            "city": "Fort Paulashire",
            "state": "Delaware",
            "zip": "37974-7846",
            "country": "Antigua and Barbuda"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/55.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3d59b3ea-4fdb-4a08-af26-0df501629011",
        "name": "Laura King",
        "title": "Regional Directives Assistant",
        "address": {
            "street": "5191 Luz Expressway",
            "city": "Monahanland",
            "state": "Wyoming",
            "zip": "86153-6071",
            "country": "Bosnia and Herzegovina"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1109.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fd3dcad5-ce99-45a1-8d31-ef4d225c828b",
        "name": "Salvatore Brakus",
        "title": "Product Creative Assistant",
        "address": {
            "street": "4543 Bobby Glen",
            "city": "Jacobsonberg",
            "state": "Mississippi",
            "zip": "87770-5244",
            "country": "Gabon"
        },
        "avatar": "https://avatars.githubusercontent.com/u/29160275",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b9166be1-74b5-4d8b-8519-da92a4017cd7",
        "name": "Bernard Barrows",
        "title": "Chief Group Associate",
        "address": {
            "street": "5435 Anahi Pass",
            "city": "Henryland",
            "state": "Rhode Island",
            "zip": "35677",
            "country": "Djibouti"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/257.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "2b820874-ac0d-408a-820b-1809f615868e",
        "name": "Gina Wintheiser-Klein",
        "title": "Forward Usability Orchestrator",
        "address": {
            "street": "76176 Jonathan Throughway",
            "city": "Botsfordcester",
            "state": "Connecticut",
            "zip": "97586",
            "country": "Mongolia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1001.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7305c708-0316-411c-97a6-70657b8cf432",
        "name": "Rick Bins",
        "title": "Customer Data Facilitator",
        "address": {
            "street": "75250 Jacinthe Path",
            "city": "South Tyreek",
            "state": "Maine",
            "zip": "11133",
            "country": "Antigua and Barbuda"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/6.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e1406094-a91d-458b-aedc-932b154e2a50",
        "name": "Mr. Steve Emard",
        "title": "Product Communications Producer",
        "address": {
            "street": "69718 Waelchi Valleys",
            "city": "Fort Saul",
            "state": "Maine",
            "zip": "45019-4307",
            "country": "Montenegro"
        },
        "avatar": "https://avatars.githubusercontent.com/u/21659513",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "08ceadda-508e-40ac-b5c4-205e2751a1d1",
        "name": "Grady Kshlerin",
        "title": "Principal Response Liaison",
        "address": {
            "street": "91780 Wilber Trace",
            "city": "West Lysannemouth",
            "state": "Oregon",
            "zip": "27596-3429",
            "country": "Libyan Arab Jamahiriya"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/236.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "847c788c-0996-4f36-8f69-c53a757ad7d3",
        "name": "Rene Thompson",
        "title": "Chief Configuration Coordinator",
        "address": {
            "street": "180 Casper Glen",
            "city": "Rickietown",
            "state": "Iowa",
            "zip": "39332",
            "country": "Norway"
        },
        "avatar": "https://avatars.githubusercontent.com/u/4019128",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6dfbd3de-238f-4c90-bd88-e38aa29f5411",
        "name": "Dr. Kelvin Krajcik-Johnson Jr.",
        "title": "Lead Accounts Strategist",
        "address": {
            "street": "85863 Wyman Heights",
            "city": "Croninview",
            "state": "Louisiana",
            "zip": "15850",
            "country": "Bahrain"
        },
        "avatar": "https://avatars.githubusercontent.com/u/40193535",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8537bc84-5625-42d0-a276-0bc3e2dab8b9",
        "name": "Darrell Ebert",
        "title": "District Accounts Supervisor",
        "address": {
            "street": "60609 Florence Manors",
            "city": "Walkerberg",
            "state": "Connecticut",
            "zip": "80693-4196",
            "country": "Cook Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/70777681",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "bb8ecf61-0062-4b59-a0fb-f394e18248a7",
        "name": "Nicole Lang",
        "title": "Direct Response Planner",
        "address": {
            "street": "607 Anna Points",
            "city": "New Margarete",
            "state": "New Jersey",
            "zip": "98817-1414",
            "country": "Equatorial Guinea"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/663.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b60941ea-7a5f-4bc0-bb3b-5d347b920ed6",
        "name": "Alfred Runolfsson",
        "title": "Future Security Officer",
        "address": {
            "street": "653 Viva Route",
            "city": "Kalebboro",
            "state": "Rhode Island",
            "zip": "81531",
            "country": "Saint Lucia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/139.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "06ecc3e9-8283-414e-b88e-817348245d38",
        "name": "Sergio Schowalter",
        "title": "Central Marketing Architect",
        "address": {
            "street": "588 Carmel Wall",
            "city": "Genevievefield",
            "state": "West Virginia",
            "zip": "88284",
            "country": "United States Minor Outlying Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/595.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "487b1359-e0d3-4cec-8b93-59b788a4b337",
        "name": "Al Parker",
        "title": "Central Configuration Coordinator",
        "address": {
            "street": "2528 Steuber Way",
            "city": "New Adeliacester",
            "state": "Nebraska",
            "zip": "45834-7457",
            "country": "South Georgia and the South Sandwich Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/867.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "b141ee4a-cfdb-4f03-b5c5-0e2cfc6bf12c",
        "name": "Dr. Ray Williamson Sr.",
        "title": "Dynamic Interactions Designer",
        "address": {
            "street": "20552 Prohaska Manor",
            "city": "Uptonside",
            "state": "Tennessee",
            "zip": "22556-0309",
            "country": "Marshall Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/60931687",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "82bdd4b8-296c-4ab6-b5b0-b657884b7eff",
        "name": "Joann Turner",
        "title": "Forward Tactics Architect",
        "address": {
            "street": "799 Durgan Junction",
            "city": "Winfieldport",
            "state": "Tennessee",
            "zip": "90618-4775",
            "country": "Panama"
        },
        "avatar": "https://avatars.githubusercontent.com/u/48633836",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "44a960f4-1fcc-47a0-9f46-c90cbfceb120",
        "name": "Angelina Bradtke V",
        "title": "Corporate Paradigm Planner",
        "address": {
            "street": "461 Maybell Ferry",
            "city": "Burlington",
            "state": "Washington",
            "zip": "44522",
            "country": "San Marino"
        },
        "avatar": "https://avatars.githubusercontent.com/u/39250609",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "33729523-99eb-4c45-a19e-c95602f26bc9",
        "name": "Joe Skiles-Yundt",
        "title": "Internal Operations Associate",
        "address": {
            "street": "7358 Mekhi Branch",
            "city": "West Shaina",
            "state": "Connecticut",
            "zip": "90373",
            "country": "Saudi Arabia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/21297239",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d16d94c8-4ee4-4f2a-9d6f-fd31ef40dbca",
        "name": "Arturo Lebsack",
        "title": "Principal Response Assistant",
        "address": {
            "street": "94684 Mandy Pines",
            "city": "South Austyn",
            "state": "Michigan",
            "zip": "83365",
            "country": "Macao"
        },
        "avatar": "https://avatars.githubusercontent.com/u/38386748",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1618f254-7286-46f7-b0fe-5e417b8b0273",
        "name": "Emanuel Quigley",
        "title": "Human Markets Consultant",
        "address": {
            "street": "924 Cassidy Circles",
            "city": "Victorialand",
            "state": "New Jersey",
            "zip": "38931",
            "country": "Iceland"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1050.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ac9be7f6-0025-469f-8e6a-cd653c5065a5",
        "name": "Herman Dach",
        "title": "Investor Optimization Orchestrator",
        "address": {
            "street": "947 Jennyfer Drives",
            "city": "Kilbackburgh",
            "state": "New Hampshire",
            "zip": "04470",
            "country": "New Caledonia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/800.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "01715c11-5b98-43e5-b648-3aa4c32d7e1a",
        "name": "Henry Howe",
        "title": "Central Group Manager",
        "address": {
            "street": "757 Feeney Centers",
            "city": "South Orlandborough",
            "state": "Vermont",
            "zip": "66025",
            "country": "Greece"
        },
        "avatar": "https://avatars.githubusercontent.com/u/50123729",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "70fb07f4-2791-4f62-88c1-c4ddd8d910fd",
        "name": "Sabrina Roberts",
        "title": "Chief Applications Officer",
        "address": {
            "street": "9349 Alejandra Lock",
            "city": "Hirtheberg",
            "state": "Minnesota",
            "zip": "32941",
            "country": "Mozambique"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/603.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7c1832ed-944d-4459-ac81-b65a4afc99dc",
        "name": "Clinton Wisoky",
        "title": "Internal Integration Engineer",
        "address": {
            "street": "1535 Krajcik Knolls",
            "city": "East Roberta",
            "state": "Virginia",
            "zip": "70569",
            "country": "Saint Helena"
        },
        "avatar": "https://avatars.githubusercontent.com/u/71049974",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ab3c10af-fc95-4a39-9d83-3d92dbc80c66",
        "name": "Noel Koch",
        "title": "Senior Infrastructure Consultant",
        "address": {
            "street": "66385 Bennie Route",
            "city": "Lake Unahaven",
            "state": "Wisconsin",
            "zip": "50782",
            "country": "Uzbekistan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1003.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d4ada3cd-732c-465f-aa04-dcc08318dde2",
        "name": "Kelvin Brown MD",
        "title": "Corporate Identity Representative",
        "address": {
            "street": "135 Jazlyn Prairie",
            "city": "Hildaville",
            "state": "Minnesota",
            "zip": "90496",
            "country": "Georgia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/82711738",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7b7630b8-5b0b-423b-ade0-8ead7b9a34a8",
        "name": "Tanya Green",
        "title": "Investor Accounts Orchestrator",
        "address": {
            "street": "1515 Wolf Mills",
            "city": "Fort Lolita",
            "state": "Iowa",
            "zip": "05731-5272",
            "country": "Northern Mariana Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/23536139",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "427126a8-6e11-444e-9689-354986dfa333",
        "name": "Miss Leticia Stokes",
        "title": "Legacy Implementation Designer",
        "address": {
            "street": "662 Bahringer Centers",
            "city": "Candidoport",
            "state": "Iowa",
            "zip": "02698-3668",
            "country": "Senegal"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/659.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ebd7ceb8-2bab-4842-93b1-22480cbccefe",
        "name": "Bill Pollich",
        "title": "Senior Operations Orchestrator",
        "address": {
            "street": "25562 Kitty Harbor",
            "city": "Silver Spring",
            "state": "Mississippi",
            "zip": "50991",
            "country": "Sudan"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/971.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d547020a-b396-4871-a9e0-02c2fe7ed597",
        "name": "Darrell Renner",
        "title": "Human Usability Designer",
        "address": {
            "street": "2597 Natalia Corners",
            "city": "Port Ulises",
            "state": "Missouri",
            "zip": "94645-1714",
            "country": "Sudan"
        },
        "avatar": "https://avatars.githubusercontent.com/u/80643074",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "230ad7b6-3d5b-4988-a634-7e09feb14588",
        "name": "Jacob Larson",
        "title": "Senior Accounts Manager",
        "address": {
            "street": "235 Candice Alley",
            "city": "Lake Trenton",
            "state": "Rhode Island",
            "zip": "71310-8031",
            "country": "British Indian Ocean Territory (Chagos Archipelago)"
        },
        "avatar": "https://avatars.githubusercontent.com/u/67966428",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "52c96e9e-a3b0-4673-aa80-ff8f278e154a",
        "name": "Daryl Gutmann",
        "title": "Principal Security Strategist",
        "address": {
            "street": "74487 Berge Meadow",
            "city": "Louisville/Jefferson County",
            "state": "South Dakota",
            "zip": "81055",
            "country": "Lesotho"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/686.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "918b0ab1-fd8b-4edd-81f2-eb682e7d3baa",
        "name": "Sidney Weimann",
        "title": "Regional Integration Designer",
        "address": {
            "street": "6182 Hintz Point",
            "city": "East Estefania",
            "state": "West Virginia",
            "zip": "67702-0551",
            "country": "Saint Martin"
        },
        "avatar": "https://avatars.githubusercontent.com/u/46055011",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3bf72090-b6e8-460d-a7c4-f85b512ad69f",
        "name": "Scott Mohr III",
        "title": "Lead Division Liaison",
        "address": {
            "street": "804 Elna Plains",
            "city": "Seattle",
            "state": "Connecticut",
            "zip": "99503-0038",
            "country": "Sweden"
        },
        "avatar": "https://avatars.githubusercontent.com/u/42478372",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "9aa3ff8b-6e6c-4015-811a-77cb8702c0b7",
        "name": "Rudolph Monahan II",
        "title": "Lead Group Associate",
        "address": {
            "street": "9390 Zola Divide",
            "city": "East Arch",
            "state": "Virginia",
            "zip": "72944",
            "country": "Kuwait"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/218.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "76e61485-45dc-493b-bee8-a78c4709b926",
        "name": "Miss Johnnie Goyette-Emard",
        "title": "Regional Intranet Supervisor",
        "address": {
            "street": "5232 Moises Course",
            "city": "South Milford",
            "state": "Hawaii",
            "zip": "94989",
            "country": "French Polynesia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/78793568",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3fa4c950-ce7b-4085-a801-f41698095d04",
        "name": "Belinda Cronin",
        "title": "Central Division Designer",
        "address": {
            "street": "77010 Antwon Drive",
            "city": "Elliottstad",
            "state": "North Dakota",
            "zip": "12363",
            "country": "Venezuela"
        },
        "avatar": "https://avatars.githubusercontent.com/u/20335316",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "659926bb-72ce-4ffc-a11a-823b3d6a4d2d",
        "name": "Jasmine Swift",
        "title": "Forward Division Orchestrator",
        "address": {
            "street": "101 Kerluke Mount",
            "city": "Dinohaven",
            "state": "Montana",
            "zip": "13385-2256",
            "country": "Egypt"
        },
        "avatar": "https://avatars.githubusercontent.com/u/45673813",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "6513b664-af52-4e66-a8c0-77f3cd145a5b",
        "name": "Penny Russel",
        "title": "Dynamic Program Officer",
        "address": {
            "street": "604 Parker Prairie",
            "city": "Zoraton",
            "state": "Minnesota",
            "zip": "31612",
            "country": "Australia"
        },
        "avatar": "https://avatars.githubusercontent.com/u/97651527",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8ecd4cf1-ad22-45dc-971c-b8c065868f19",
        "name": "Lisa Price",
        "title": "Chief Directives Planner",
        "address": {
            "street": "440 Stanton Dam",
            "city": "Port Everardofort",
            "state": "Alaska",
            "zip": "77281-0482",
            "country": "Burkina Faso"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/896.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "8ff32c52-430c-4df2-859a-63037a699262",
        "name": "Rosa West",
        "title": "International Integration Orchestrator",
        "address": {
            "street": "64118 Rosemary Spring",
            "city": "Devanteville",
            "state": "Hawaii",
            "zip": "50317-7067",
            "country": "Qatar"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/833.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "12fda07f-83e6-4544-95f5-df6f024552d6",
        "name": "Margaret Schaden DDS",
        "title": "District Web Assistant",
        "address": {
            "street": "434 Boyer Port",
            "city": "Esmeraldatown",
            "state": "Utah",
            "zip": "84372-3969",
            "country": "Northern Mariana Islands"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/407.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ed58dd93-92e1-4341-a6c9-bb4cecaf3df3",
        "name": "Ramiro Quitzon I",
        "title": "Direct Markets Developer",
        "address": {
            "street": "357 Hickle Curve",
            "city": "Ashtonton",
            "state": "Illinois",
            "zip": "38481-7761",
            "country": "Virgin Islands, U.S."
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1204.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "ffb99500-20bb-4ef8-bb62-efa541892fc3",
        "name": "Lorene Dicki",
        "title": "Lead Marketing Facilitator",
        "address": {
            "street": "543 Santa Lakes",
            "city": "North Antonia",
            "state": "Michigan",
            "zip": "94279-0340",
            "country": "Senegal"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/419.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "cd21b30c-60e1-41b5-a12e-5051abbcb7fe",
        "name": "Jeffrey Schaefer",
        "title": "Internal Integration Designer",
        "address": {
            "street": "1316 Tanya Extensions",
            "city": "Port Elouise",
            "state": "Michigan",
            "zip": "78216-5179",
            "country": "Sweden"
        },
        "avatar": "https://avatars.githubusercontent.com/u/36219655",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "fe7a4165-75db-4f3e-a7b9-4fc727ca60eb",
        "name": "Miss Bertha Zieme",
        "title": "District Directives Officer",
        "address": {
            "street": "8891 Langworth Field",
            "city": "Adamfurt",
            "state": "South Dakota",
            "zip": "96974-9709",
            "country": "Panama"
        },
        "avatar": "https://avatars.githubusercontent.com/u/21874763",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d141503c-f3d1-4a23-a596-759252299d14",
        "name": "Ernest Kiehn",
        "title": "Human Paradigm Designer",
        "address": {
            "street": "52539 Schmeler Mountain",
            "city": "Annettaton",
            "state": "Georgia",
            "zip": "63438-7234",
            "country": "Haiti"
        },
        "avatar": "https://avatars.githubusercontent.com/u/26853016",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "7ea697ad-233b-4a31-97ab-49032030d319",
        "name": "Daniel Harvey",
        "title": "Future Directives Producer",
        "address": {
            "street": "664 Pagac Forges",
            "city": "Smithamboro",
            "state": "Wyoming",
            "zip": "48771-7623",
            "country": "Eswatini"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1088.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "de2d42b6-9b99-4997-9d3a-b56135b3168d",
        "name": "Stewart Daniel",
        "title": "Customer Optimization Supervisor",
        "address": {
            "street": "732 Hagenes Shores",
            "city": "North Monty",
            "state": "West Virginia",
            "zip": "43253-9402",
            "country": "Finland"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/736.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a2baa7f3-8e5f-41a3-8be3-fd2bc2a20e2b",
        "name": "Casey Christiansen",
        "title": "International Marketing Executive",
        "address": {
            "street": "7177 Callie Views",
            "city": "Battle Creek",
            "state": "Alaska",
            "zip": "98407",
            "country": "Bahamas"
        },
        "avatar": "https://avatars.githubusercontent.com/u/8585679",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "5205a319-e27e-4ca2-9762-0f00aff02f77",
        "name": "Dr. Ervin Shields-Murazik",
        "title": "Future Metrics Consultant",
        "address": {
            "street": "42587 Ernie Shoals",
            "city": "Glen Burnie",
            "state": "Wisconsin",
            "zip": "33692-9865",
            "country": "Mali"
        },
        "avatar": "https://avatars.githubusercontent.com/u/4536734",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "3c91c720-f526-4259-add9-5d6229690052",
        "name": "Dr. Melanie Abbott",
        "title": "Customer Group Liaison",
        "address": {
            "street": "9707 Jaylan Hill",
            "city": "Maxborough",
            "state": "Massachusetts",
            "zip": "39463-5369",
            "country": "Nicaragua"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/413.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d378deb3-56d2-419f-ae0b-8ada185dfe2a",
        "name": "Marcia Luettgen",
        "title": "Chief Factors Producer",
        "address": {
            "street": "2767 Gibson Streets",
            "city": "Alexanderboro",
            "state": "West Virginia",
            "zip": "28096-6675",
            "country": "Belgium"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/35.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f7232ab3-b4ca-46ee-af2e-c3a16359e666",
        "name": "Jana O'Conner",
        "title": "Future Brand Technician",
        "address": {
            "street": "791 Deckow Land",
            "city": "Chynacester",
            "state": "Missouri",
            "zip": "81969-8265",
            "country": "United States of America"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/305.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d4ca9b0e-bca6-4dc9-9fb1-6d52b371aa5a",
        "name": "Clifford Zboncak",
        "title": "Global Accountability Producer",
        "address": {
            "street": "19471 Kohler Trafficway",
            "city": "Minneapolis",
            "state": "Oklahoma",
            "zip": "15728-3265",
            "country": "Trinidad and Tobago"
        },
        "avatar": "https://avatars.githubusercontent.com/u/71775102",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "99aab064-60d9-4add-a5e9-cfdf0d3ee394",
        "name": "Carol Berge",
        "title": "International Branding Consultant",
        "address": {
            "street": "87264 Estell Squares",
            "city": "North Estrellashire",
            "state": "New Mexico",
            "zip": "12062-4318",
            "country": "Saint Martin"
        },
        "avatar": "https://avatars.githubusercontent.com/u/20676165",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "1032b555-4246-480a-810e-7a2d664c4f5b",
        "name": "Elijah Stoltenberg-Langworth DVM",
        "title": "Investor Usability Architect",
        "address": {
            "street": "448 Adams Cliff",
            "city": "Laruefield",
            "state": "Louisiana",
            "zip": "88631-5814",
            "country": "Guinea-Bissau"
        },
        "avatar": "https://avatars.githubusercontent.com/u/80773218",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "d6741de7-4305-4240-bff1-dcf587144a96",
        "name": "Glenda Larkin",
        "title": "Product Web Officer",
        "address": {
            "street": "9740 Kulas Squares",
            "city": "Mckenziecester",
            "state": "Texas",
            "zip": "84819",
            "country": "Greenland"
        },
        "avatar": "https://avatars.githubusercontent.com/u/52554645",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "45454d95-3a60-418a-9b9f-023a92931292",
        "name": "Estelle Nitzsche I",
        "title": "International Solutions Planner",
        "address": {
            "street": "6518 Davis Harbors",
            "city": "North Rodgermouth",
            "state": "Wisconsin",
            "zip": "85082",
            "country": "Niger"
        },
        "avatar": "https://avatars.githubusercontent.com/u/89264946",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a788573a-e772-4b2f-aac2-f7e923f9dda3",
        "name": "Gerardo Russel",
        "title": "Dynamic Solutions Coordinator",
        "address": {
            "street": "51791 Adelle Coves",
            "city": "West Toneyfield",
            "state": "Maryland",
            "zip": "59785",
            "country": "Armenia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/392.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "4241af66-2397-4f84-b269-ed5ae782c584",
        "name": "Dale Ratke",
        "title": "Legacy Functionality Analyst",
        "address": {
            "street": "138 Zieme Mountains",
            "city": "Greensboro",
            "state": "Colorado",
            "zip": "59827-3685",
            "country": "Colombia"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/133.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "433e2dd0-53b5-4fa1-a6b1-8d32ba880475",
        "name": "Felicia O'Hara",
        "title": "District Optimization Manager",
        "address": {
            "street": "70767 Sylvester Way",
            "city": "Waco",
            "state": "Indiana",
            "zip": "13493",
            "country": "Central African Republic"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/727.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "775773db-2680-45ad-b163-62b3666f29fe",
        "name": "Lillie Gusikowski",
        "title": "Senior Creative Liaison",
        "address": {
            "street": "82480 Shields Knoll",
            "city": "New Brady",
            "state": "Alabama",
            "zip": "54695",
            "country": "Palau"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/700.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "f3baf90d-17fd-4e65-9668-5aa8e06f2a2a",
        "name": "Byron Halvorson",
        "title": "International Paradigm Assistant",
        "address": {
            "street": "527 Hahn Union",
            "city": "Lake Lesly",
            "state": "Minnesota",
            "zip": "84271-9233",
            "country": "Burkina Faso"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1234.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a90de6f5-a445-47a1-b586-cb8edec5de40",
        "name": "Dr. Rhonda Wyman",
        "title": "Customer Accounts Analyst",
        "address": {
            "street": "45400 Helga Loaf",
            "city": "South Nina",
            "state": "Louisiana",
            "zip": "15059",
            "country": "Kiribati"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/116.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "07abc694-235d-4ce2-91ab-04d73cd220af",
        "name": "Ollie Hackett",
        "title": "Product Implementation Representative",
        "address": {
            "street": "23001 Dibbert Ferry",
            "city": "Bauchfort",
            "state": "Florida",
            "zip": "91192-0721",
            "country": "Uganda"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/540.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "cc36919c-0d6a-45c8-85a6-35f30968841b",
        "name": "Robin Crooks",
        "title": "Senior Web Liaison",
        "address": {
            "street": "9285 Jennyfer Courts",
            "city": "East Eileen",
            "state": "Kansas",
            "zip": "10241",
            "country": "Holy See (Vatican City State)"
        },
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1015.jpg",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e7379373-ca6f-45b9-8bab-b7cc63fe3d32",
        "name": "Lionel Metz-Lubowitz",
        "title": "Chief Quality Assistant",
        "address": {
            "street": "80782 Liliane Mission",
            "city": "Bellflower",
            "state": "West Virginia",
            "zip": "66415-6541",
            "country": "Cayman Islands"
        },
        "avatar": "https://avatars.githubusercontent.com/u/51142691",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "e3194245-97fc-4917-a843-ea34b641aaeb",
        "name": "Ernestine Prosacco I",
        "title": "Customer Directives Producer",
        "address": {
            "street": "1570 Electa Plain",
            "city": "McAllen",
            "state": "Illinois",
            "zip": "17700",
            "country": "Saint Barthelemy"
        },
        "avatar": "https://avatars.githubusercontent.com/u/39802001",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    },
    {
        "id": "a99bfbc2-5cda-4b65-8da1-258b4d0e41e3",
        "name": "Dwayne Mann",
        "title": "National Marketing Designer",
        "address": {
            "street": "9303 Gerhold Canyon",
            "city": "West Herminio",
            "state": "Georgia",
            "zip": "62563-2912",
            "country": "Guinea"
        },
        "avatar": "https://avatars.githubusercontent.com/u/14926825",
        "imgHost": "https://picsum.photos/600/400?random=",
        "switchTime": 10000
    }
]

const totalCustomers = 1200;

export const getAllCustomers = (): Array<Customer> => {
    if (!customers) {
        customers = customerGenerator(totalCustomers);
    }

    return customers;
}

export const getCustomerById = (id: string): Promise<Customer> => {
    const customer = getAllCustomers().find(customer => customer.id === id);

    if (!customer) {
        throw new Error('Customer not found');
    }

    return returnAfter(300, customer);
}

export const getCustomersByPage = (page: number, pageSize: number): Promise<{
    data: Array<Customer>,
    hasMore: boolean,
    nextPage: number
}> => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    return returnAfter(300, {
        data: getAllCustomers().slice(start, end),
        hasMore: end < totalCustomers,
        nextPage: page + 1
    })
}

const returnAfter = <T>(ms: number, value: T): Promise<T> => new Promise(resolve => {
    setTimeout(() => resolve(value), ms);
});