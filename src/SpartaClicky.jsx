/**
 * When you click on this, it bounces around the screen while an excerpt from Wizard's Last Rhymes plays
 * 
 * The purpose is to show off how i can use jquery and React hooks to animate
 * 
 */

import React, {useState} from 'react';
import $ from 'jquery';

const SpartaClicky =  () => {
    const [bouncing, toggleBounce] = useState(false)
    const bounce = async () => {
        // toggleBounce(true);
        // let phaseOne = new Promise((resolve, reject) => {
        //     $('#sparta-clicky').css("-webkit-transform", "translate(-100px, 600px) rotate(-90deg)")
        // })

        const firstMove = () => {$('#sparta-clicky').css({
            top: 600,
            right: 200,
            WebkitTransform: 'rotate(90deg)'
        })}
        
        const secondMove = () => {
            $('#sparta-clicky').css({
                top: 0,
                right: 400,
                WebkitTransform: 'rotate(180deg)'
            })
        }

        const thirdMove = () => {
            $('#sparta-clicky').css({
                top: 600,
                right: 600,
                WebkitTransform: 'rotate(270deg)'
            })
        }
     
        const fourthMove = () => {
            $('#sparta-clicky').css({
                top: 0,
                right: 800,
                WebkitTransform: 'rotate(360deg)'
            })
        }
            firstMove();
            setTimeout(secondMove, 1000);
            setTimeout(thirdMove, 2000);
            setTimeout(fourthMove, 3000)
        //   $('#sparta-clicky').css("-webkit-transform", "translate(-100px, 600px) rotate(-90deg)")
        //  setTimeout( () => $('#sparta-clicky').css("-webkit-transform", "translate(-800px, -1200px) rotate(-180deg)"), 1000)
        // setTimeout(() => $('#sparta-clicky').css("-webkit-transform", "translate(-1300px, 600px) rotate(-180deg)"), 1000)

      
        // await phaseOne

        // let phaseTwo = new Promise((resolve, reject )=> {
        //     $('#sparta-clicky').css("-webkit-transform", "translate(600px, -500px) rotate(90deg)")
        // })
        // // .then( () => {
        // //     $('#sparta-clicky').css("-webkit-transform", "translate(600px, -500px) rotate(90deg)" )
        // // });
        
        // await phaseTwo
        

        //Do a bunch of jquery, wait for thing to come back to original position, then set bouncing to false again
    }
    return (
        <div className={`sparta ${bouncing ? 'bouncing' : ''}`} id="sparta-clicky" onClick={bouncing ? () => false : bounce} />
    )
}

export default SpartaClicky;