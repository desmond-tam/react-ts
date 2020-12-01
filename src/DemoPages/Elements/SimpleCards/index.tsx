import React, {Component, Fragment, useState,useEffect} from 'react';
import {Button} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {
    Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink, CardHeader, CardFooter
} from 'reactstrap';

interface ICard {
    key:number;
    title:string;
    description:string;
}

const get_cards = async() => {
    return [
        {
            key:1,
            title:'basic example',
            description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo \
             ligula \
             eget dolor. Aenean massa.'
        },
        {
            key:2,
            title:'basic example',
            description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo \
             ligula \
             eget dolor. Aenean massa.'
        }, {
            key:3,
            title:'basic example',
            description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo \
             ligula \
             eget dolor. Aenean massa.'
        }
    ];
};


export function SimpleCard() {
    const [cards,setCard] = useState<ICard[]>([]);

    useEffect(function effectFunction() {
        async function fetchCards() {
            const data = await get_cards();
            //const json = await data();
            setCard(data);
        }
        fetchCards();
    }, []);

    function more() {
        let list =
            [
                {
                    key:cards.length+1,
                    title:`basic example ${cards.length}`,
                    description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo \
                     ligula \
                     eget dolor. Aenean massa.'
                },
                {
                    key:cards.length+2,
                    title:'basic example',
                    description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo \
                     ligula \
                     eget dolor. Aenean massa.'
                }, {
                    key:cards.length+3,
                    title:'basic example',
                    description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo \
                     ligula \
                     eget dolor. Aenean massa.'
                }
            ];
        
        setCard(c => [...c,...list]);
        console.log(cards.length);
    }

    return  (
        <Fragment>
            <ReactCSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <Row>
                    {cards.map(item => (
                         <Col key={item.key} md="4">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>{item.title}</CardTitle>
                                        <p>{item.description}</p>

                                </CardBody>
                            </Card>
                        </Col>
                    ))}

                    <Col md="12">
                        <Card className="main-card mb-3">
                            <CardBody className="text-center">
                                <Button className="mb-2 mr-2" color="primary" onClick={() => more()}>More</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </ReactCSSTransitionGroup>
        </Fragment>
    );
} 


// class SimpleCard extends Component {
//     constructor(props) {
//         super(props);
//     }
    

//     const more = (cards) => {
//         setCard([
//             ...cards,
//             {
//                 title:'basic example',
//                 description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo \
//                 ligula \
//                 eget dolor. Aenean massa.'
//             }
//         ]);
//     }

//     render() {
//         return (
//             <Fragment>
//                 <ReactCSSTransitionGroup
//                     component="div"
//                     transitionName="TabsAnimation"
//                     transitionAppear={true}
//                     transitionAppearTimeout={0}
//                     transitionEnter={false}
//                     transitionLeave={false}>
//                     <Row>
//                         {cards.map(item => (
//                              <Col md="4">
//                                 <Card className="main-card mb-3">
//                                     <CardBody>
//                                         <CardTitle>{item.title}</CardTitle>
//                                             <p>{item.description}</p>

//                                     </CardBody>
//                                 </Card>
//                             </Col>
//                         ))}

//                         <Col md="12">
//                             <Card className="main-card mb-3">
//                                 <CardBody className="text-center">
//                                     <Button className="mb-2 mr-2" color="primary">More</Button>
//                                 </CardBody>
//                             </Card>
//                         </Col>
//                     </Row>
//                 </ReactCSSTransitionGroup>
//             </Fragment>
//         );
//     }
// };

export default SimpleCard;
