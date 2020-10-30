import React from 'react';
import './NavigationBar.css';

function NavigationBar(){
    return (
        <nav data-testid="navigation-bar">
			<ul>
		        <li><a href="#">0. About</a></li>		
		        <li><a href="#">1. Experience</a></li>		
		        <li><a href="#">2. Work</a></li>		
		        <li><a href="#">3. Resume</a></li>		
			</ul>
		</nav>	
	)
}


export default NavigationBar;
