import { SwipeableDrawer } from '@material-ui/core';
import React, {useState} from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css'
function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Vlagyimir Putyin",
            url: "https://cdn.nwmgroups.hu/s/img/i/1502/20150212elnok-kiraly-kirajno-kocsija3.jpg"
        },
        {
            name: "Gyurcsány Ferenc (defektes)",
            url: "https://pannonhirnok.com/wp-content/uploads/2019/04/ex-minisztereln%C3%B6k-715x400.png"
        },
        
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log(nameToDelete + " törlése folyamatban...");
    };

    const outOfFrame = (name) => {
        console.log(name + " törölve.");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map(person => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
                
                
                >
                    <div    
                        style={{ backgroundImage: `url(${person.url})` }}
                        className="card"
                    >
                        <h3>{person.name}</h3>

                    </div>

                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
