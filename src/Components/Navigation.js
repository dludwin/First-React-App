import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring';
import NavigationMenu from './NavigationMenu';

function Navigation() {
	const [showMenu, setShowMenu] = useState(false); // Hook based approach. useState Hook returns [ .. , .. ]
	// Array. showMenu variable is set to false, setShowMenu changes that variable https://www.react-spring.io/docs/hooks/use-transition
	const maskTransitions = useTransition(showMenu, null, {
		from: { position: 'absolute', opacity: 0 }, // we start with absolute position
		enter: { opacity: 1 }, // entering stable state at opacity
		leave: { opacity: 0 },
	});

	const menuTransitions = useTransition(showMenu, null, {
		// copied from website
		// null is optional can be null
		from: { opacity: 0, transform: 'translateX(-100%)' },
		enter: { opacity: 1, transform: 'translateX(0%)' },
		leave: { opacity: 0, transform: 'translateX(-100%)' },
	});

	return (
		<nav>
			<span className="text-xl">
				<FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
			</span>

			{maskTransitions.map(
				// copied from website
				({ item, key, props }) =>
					item && (
						<animated.div
							key={key}
							style={props}
							className=" fixed bg-gray-100 top-0 left-0 w-full h-full z-50"
							onClick={() => setShowMenu(false)} // after clicking the mask menu is closed
						></animated.div>
					)
			)}

			{menuTransitions.map(
				({ item, key, props }) =>
					item && (
						<animated.div
							key={key}
							style={props}
							className="fixed bg-white top-0 right-0 w-2/5 h-full z-50 shadow p-3"
						>
							<NavigationMenu closeMenu={() => setShowMenu(false)} />
						</animated.div>
					)
			)}
		</nav>
	);
}

export default Navigation;
