import {useEffect} from 'react'
// @ts-ignore
import {themeChange} from 'theme-change'

import {VscChevronDown, VscSymbolColor} from "react-icons/vsc";


export default function ThemeSwitch() {
    useEffect(() => {
        themeChange(false)
    }, [])

    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost gap-2 normal-case">
                <VscSymbolColor className={'w-6 h-6'}/>
                <span className="hidden md:inline">Change Theme</span>
                <VscChevronDown className={'w-6 h-6'}/>
            </label>
            <ul className="dropdown-content bg-base-200 text-base-content rounded-box shadow-2xl menu p-4 w-36">
                <li>
                    <button data-set-theme={"winter"}>⚪ Light</button>
                </li>
                <li>
                    <button data-set-theme={"dark"}>⚫ Dark</button>
                </li>
                <li>
                    <button data-set-theme={"aqua"}>🐟 Aqua</button>
                </li>
                <li>
                    <button data-set-theme={"night"}>🌙 Night</button>
                </li>
            </ul>
        </div>
    )
}

