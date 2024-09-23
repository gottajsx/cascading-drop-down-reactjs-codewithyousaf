import { useState } from "react";

export default function GetData() {
    const countries= [
        {
            name: "los angeles",
            states: [
                {
                    name: "1 first",
                    cities: ["area 1, area 2"]
                },
                {
                    name: "1 second",
                    cities: ['area 3, area 4']
                },
                {
                    name: "1 third",
                    cities: ["area 5, area 6"]
                }
            ]
        },
        {
            name: "virginia",
            states: [
                {
                    name: "v first",
                    cities: ["area 7, area 8"]
                },
                {
                    name: "v second",
                    cities: ["area9, area 10"]
                },
                {
                    name: "v third",
                    cities:["area 11, area 12"]
                }
            ]
        }
    ];

    const [country, setCountriy] = useState('--Country--')
    const [state, setState] = useState('--State--')
    const [city, setCity] = useState('--City--')

    return (
        <div className="justify-content-center d-flex w-100 vh-100 bg-dark text-white">
            <div className="w-50  mt-5">
                <h3>Select Country and Cities</h3>
                <select className="form-control" value={country}>
                    <option>--Country--</option>
                </select>
                <br />
                <select className="form-control" value={country}>
                    <option>--State--</option>
                </select>
                <br />
                <select className="form-control" value={country}>
                    <option>--City--</option>
                </select>
                <br />
            </div>
        </div>
    )
}