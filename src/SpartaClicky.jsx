/**
 * When you click on this, it bounces around the screen while an excerpt from Wizard's Last Rhymes plays
 * 
 * The purpose is to show off how i can use jquery and React hooks to animate
 * 
 */

import React, {useState, useRef} from 'react';
import $ from 'jquery';
import spartahead from './images/spartahead.png';


const SpartaClicky =  () => {
    const [bouncing, toggleBounce] = useState(false)

    const bounce = async () => {
        
        if (bouncing) {
            return false;
        }

        toggleBounce(true);

        // let phaseOne = new Promise((resolve, reject) => {
        //     $('#sparta-clicky').css("-webkit-transform", "translate(-100px, 600px) rotate(-90deg)")
        // })

        const firstMove = () => {$('#sparta-clicky').css({
            top: 900,
            right: 200,
            visibility: 'visible',
            WebkitTransform: 'rotate(720deg)'
        })}
        
        const secondMove = () => {
            $('#sparta-clicky').css({
                top: 0,
                right: 400,
                WebkitTransform: 'rotate(720deg)'
            })
        }

        const thirdMove = () => {
            $('#sparta-clicky').css({
                top: 900,
                right: 600,
                WebkitTransform: 'rotate(720deg)'
            })
        }
     
        const fourthMove = () => {
            $('#sparta-clicky').css({
                top: 0,
                right: 800,
                WebkitTransform: 'rotate(720deg)'
            })
        }

        const fifthMove = () => {
                $('#sparta-clicky').css({
                    top: 900,
                    right: 1000,
                    WebkitTransform: 'rotate(720deg)'
                })
        }

        const sixthMove = () => {
            $('#sparta-clicky').css({
                top: 0,
                right: 1200,
                WebkitTransform: 'rotate(180deg)'
            })
        }

        const seventhMove = () => {
            $('#sparta-clicky').css({
                top: 900,
                right: 1400,
                WebkitTransform: 'rotate(1080deg)'
            })
        }

        const eighthMove = () => {
            $('#sparta-clicky').css({
                top: 0,
                right: 1600,
                WebkitTransform: 'rotate(360deg)'
            })
        }

        const ninthMove = () => {
            $('#sparta-clicky').css({
                top: 900,
                right: 2000,
                WebkitTransform: 'rotate(360deg)'
            })
        }


            firstMove();
            setTimeout(secondMove, 500);
            setTimeout(thirdMove, 1000);
            setTimeout(fourthMove, 1500);
            setTimeout(fifthMove, 2000);
            setTimeout(sixthMove, 2500);
            setTimeout(seventhMove, 3000);
            setTimeout(eighthMove, 3500);
            setTimeout(ninthMove, 4000);
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
        <div className={`sparta ${bouncing ? 'bouncing' : ''}`} 
             style={{ backgroundImage: `url(${spartahead})`}} 
             id="sparta-clicky" 
             onClick={bounce} 
        />
    )
}

export default SpartaClicky;