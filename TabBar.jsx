import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TabBarNav from './TabBarNav/TabBarNav';

import './TabBar.scss';

class TabBar extends Component {

    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        vertical: PropTypes.bool,
    };

    static defaultProps = {
        children: null,
        className: '',
        vertical: false,
    };

    state = {
        activeTab: null,
    };

    componentDidMount() {
        const {children=[]} = this.props;

        const activeTab = this.getChildrenLabels(children)[0];

        this.setActiveTab(activeTab);
    }

    getChildrenLabels = (children) => {
        return children.map(({props}) => props.label);
    };

    setActiveTab = (activeTab) => {
        const {activeTab: currentTab} = this.state;

        if (currentTab !== activeTab) {
            this.setState({
                activeTab,
            });
        }
    };

    renderTabs = () => {
        const {children = []} = this.props;
        const { activeTab} = this.state;

        return this.getChildrenLabels(children).map((navLabel) => (
            <TabBarNav
                key={navLabel}
                navLabel={navLabel}
                className={classNames({active: activeTab === navLabel})}
                onChangeActiveTab={this.setActiveTab}
            />
        ));
    };

    render() {
        const {activeTab} = this.state;
        const {children, className, vertical, ...attrs} = this.props;

        const tabBarClasses = classNames(
            'tabBar',
            className,
            {vertical},
        );

        return (
            <div
                className={tabBarClasses}
                {...attrs}>
                <div className="tabBarNav">
                    {this.renderTabs()}
                </div>
                <div className="tabContainer">
                    {React.Children.map(children, child => React.cloneElement(child, {activeTab}))}
                </div>
            </div>
        );
    }
}

export default TabBar;