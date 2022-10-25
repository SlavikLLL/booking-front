import React,{useState} from 'react'
import './Header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {DateRange} from "react-date-range";
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css';
import {format} from 'date-fns'
import {faBed,faCalendarDays,faCar,faPerson,faPlane,faTaxi} from "@fortawesome/free-solid-svg-icons"
const Header = ({type}) => {
    const [date,setDate] = useState([
        {
            startDate : new Date(),
            endDate : new Date(),
            key : "selection"
        }
    ])
    const [open,setOpen] = useState(false)
    const [options,setOptions] = useState({
        adult:1,
        children:0,
        room:1
    })
    const [openOptions,setOpenOptions] = useState(false)
    const handleOption = (name,operation) =>{
        setOptions(prev=>{return {
            ...prev,[name]:operation === 'i' ? options[name]+1 : options[name]-1
        }})
    }
    return (
    <div className="header">
        <div className="headerContainer">
        <div className="headerlist">
            <div className="headerlistItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stay</span>
            </div>
            <div className="headerlistItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
            </div>
            <div className="headerlistItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Rent car</span>
            </div>
            <div className="headerlistItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Attraction</span>
            </div>
            <div className="headerlistItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Taxi from airport</span>
            </div>
            <div className="headerlistItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Stay</span>
            </div>
           
        </div>
        <h1 className="headerTitile">
                A lifetime of discounts? It is Genuis
            </h1>
            <p className='headerDesc'>
                Get reward for your travels - unlock instant savings of 10% or more
                with a free Booking account
            </p>
            <button className="headerButton">Sign in / Register</button>
            <div className="searchBar">
                <div className="SearchItem">
                    <FontAwesomeIcon icon ={faBed} className ="searchIcon" />
                    <input type="text"  placeholder='Where are u going' className='searchInput'/> 
                </div>
                <div className="SearchItem">
                    <FontAwesomeIcon icon ={faCalendarDays} className ="searchIcon" />
                    <span onClick={()=>setOpen(!open)} className='searchText'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")} `}</span>
                    { open && <DateRange 
                    onChange={item =>setDate([item.selection])}
                    editableDateInputs={true}
                    moveRangeOnFirstSelection ={false}
                    ranges={date}
                    className='date'
                    />}
                </div>
                <div className="SearchItem">
                    <FontAwesomeIcon icon ={faPerson} className ="searchIcon" />
                    <span onClick={()=> setOpenOptions(!openOptions)} className='searchText'>{`${options.adult} adult / ${options.children} children / ${options.room} room`}</span>
                    { openOptions && <div className="options">
                        <div className="optionItem">
                        <span className="optionText"> Adult</span>
                            <div className="optionCounter">
                        <button onClick={()=>handleOption('adult','d')} className="optionCounterBtn" disabled={options.adult<=1}>-</button>
                        <span className="optionCountNumber">{options.adult}</span>
                        <button onClick={()=>handleOption('adult','i')} className="optionCounterBtn">+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                        <span className="optionText">Children</span>
                            <div className="optionCounter">
                        <button onClick={()=>handleOption('children','d')}  disabled={options.children<=0} className="optionCounterBtn">-</button>
                        <span className="optionCountNumber">{options.children}</span>
                        <button  onClick={()=>handleOption('children','i')} className="optionCounterBtn">+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                        <span className="optionText">Room</span>
                            <div className="optionCounter">
                        <button onClick={()=>handleOption('room','d')}  disabled={options.room<=1} className="optionCounterBtn">-</button>
                        <span className="optionCountNumber">{options.room}</span>
                        <button  onClick={()=>handleOption('room','i')} className="optionCounterBtn">+</button>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="SearchItem">
                    <button className="headerButton">Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header