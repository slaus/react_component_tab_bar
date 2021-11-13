import React, { Fragment } from 'react';
import TabBar from './TabBar';
import TabBarItem from './TabBarItem/TabBarItem';

import Image from '../Image/Image';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';

const Sandbox = () => (
    <Fragment>

        <h3 className="mt-5">Tab Bar</h3>
        <h5><span>1. Horizontal Tabbar:</span></h5>
        <TabBar>
            <TabBarItem label="Simple">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </TabBarItem>
            <TabBarItem label="Image">
                <Image
                    src="https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg"
                    width={150}
                    height={150}
                />
            </TabBarItem>
            <TabBarItem label="Component">
                <ButtonGroup>
                    <Button active>First</Button>
                    <Button>Middle</Button>
                    <Button>Last</Button>
                </ButtonGroup>
            </TabBarItem>
        </TabBar>

        <h5><span>2. Vertical Tabbar:</span></h5>
        <TabBar vertical>
            <TabBarItem label="Simple text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </TabBarItem>
            <TabBarItem label="Image">
                <Image
                    src="https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg"
                    width={150}
                    height={150}
                />
            </TabBarItem>
            <TabBarItem label="Component">
                <ButtonGroup>
                    <Button active>First</Button>
                    <Button>Middle</Button>
                    <Button>Last</Button>
                </ButtonGroup>
            </TabBarItem>
        </TabBar>

    </Fragment>
);

export default Sandbox;