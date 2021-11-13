import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './TabBarNav.scss';

const TabBarNav = ({
                       navLabel,
                       className,
                       onChangeActiveTab,
                   }) => {

    const tabBarNavClasses = classNames(
        'tabBarNavBtn',
        className,
    );

    return (
        <button
            className={tabBarNavClasses}
            onClick={() => {onChangeActiveTab(navLabel);}}>
            {navLabel}
        </button>
    );
};

TabBarNav.propTypes = {
    navLabel: PropTypes.string,
    className: PropTypes.string,
    onChangeActiveTab: PropTypes.func,
};

TabBarNav.defaultProps = {
    navLabel: 'Tab',
    className: '',
    onChangeActiveTab: () => {}
};

export default TabBarNav;