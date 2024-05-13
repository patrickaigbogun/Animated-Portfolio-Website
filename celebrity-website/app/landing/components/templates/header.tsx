import React from 'react'

export default function Header() {
	return (
		<>
		<header className="header">
			<a href="/landing" className="logo">Patrick</a>
			<nav className="navbar">
				<a href="#home" className="active">Home</a>
				<a href="#about">About</a>
				<a href="#fanclub">Fan Club</a>
				<a href="#contact">Contact/Booking</a>
			</nav>
		</header>
		</>	
	)
}
