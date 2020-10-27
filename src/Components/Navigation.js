import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring';
import NavigationMenu from './NavigationMenu';

function Navigation() {
	const [showMenu, setShowMenu] = useState(false); // Hook based approach. useState Hook returns [ .. , .. ]
	// Array. showMenu variable is set to false, setShowMenu changes that variable
	const maskTransitions = useTransition(showMenu, null, {
		from: { position: 'absolute', opacity: 0 }, // we start with absolute position
		enter: { opacity: 0.3 }, // entering stable state at opacity 0.3
		leave: { opacity: 0 }, // leav
	});

	const menuTransitions = useTransition(showMenu, null, {
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
				({ item, key, props }) =>
					item && (
						<animated.div
							key={key}
							style={props}
							className=" fixed bg-gray-100 top-0 left-0 w-full h-full z-50"
							onClick={() => setShowMenu(false)}
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
