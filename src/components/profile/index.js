import * as React from 'react';
import Card from "@material-ui/core/Card";
import './profile.css';
import { CardActionArea } from '@material-ui/core';

class Profile extends React.Component {

    render() {
        return (
            <div>
                <img src={this.props.imageUrl} className='name-img'></img>
                <Card className='info-card'>
                    <CardActionArea className='user-info'>
                        <p>{this.props.userName}</p>
                        <p>{this.props.email}</p>
                    </CardActionArea>
                    <CardActionArea className='user-info'>
                        <p>Groups:</p>
                        <p>afour-pune-campus@afourtech.com</p>
                        <p>afourhackathonteams@afourtech.com</p>
                        {this.props.groups.map(group => (
                            <p>{group}</p>
                        ))}
                    </CardActionArea>
                </Card>
            </div>

        );
    }

}

export default Profile;