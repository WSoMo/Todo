import React, { memo } from 'react'

const Footer = memo((props) => {
    const { setStatusFilter, activeButton} = props
    return (
        <footer className="footer">
            <ul className="filters">
                <li>
                    <a
                        href="#/"
                        className={`${activeButton === 'ALL' ? "selected" : ''}`}
                        onClick={() => setStatusFilter('ALL')}>All
                    </a>
                </li>
                <span></span>
                <li>
                    <a
                        href="#/active"
                        className={`${activeButton === 'ACTIVE' ? "selected" : ''}`}
                        onClick={() => setStatusFilter('ACTIVE')}>Active
                    </a>
                </li>
                <span></span>
                <li>
                    <a  href="#/completed"
                        className={`${activeButton === 'COMPLETED' ? "selected" : ''}`}
                        onClick={() => setStatusFilter('COMPLETED')}>Completed
                    </a>
                </li>
            </ul>
           
        </footer>
    )
})

export default Footer