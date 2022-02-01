import * as Modules from '../modules'
import * as Components from '../components'
import { Tabs, Tab, Container } from 'react-bootstrap';

export const Home = () => (
    <Components.Layout className="app-home"  >
        <Container>
            <h2>Explore Drops</h2>    
            <div className='home-main-tab'>
                <Tabs defaultActiveKey="live" id="main-table">
                    <Tab eventKey="live" title="Live">
                        <Modules.Tabcontent/>
                    </Tab>
                    <Tab eventKey="upcoming" title="Upcoming">
                        <h2 className='pt-4'>Upcoming</h2>
                    </Tab>
                    <Tab eventKey="post" title="Post">
                        <h2 className='pt-4'>Post</h2>
                    </Tab>
                </Tabs>
            </div>
        </Container>
    </Components.Layout>
)