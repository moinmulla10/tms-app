import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Course from './groups';

const groups = [
    {
        headline: 'PRS',
        name:'Performance Review System',
        image: 'Play_Store_logo.png',
    },
    {
        headline:'PS',
        name: 'Play Store',
        image: 'Play_Store_logo.png'
    }
]
class CourseList extends Component {
   

    constructor() {
        super()
    }

   

    
    render() {
        return (
            <div>
                {groups ? (
                    <div>
                        <div className='banner-bg'></div>
                        <Grid container spacing={24} style={{padding: 24}}>
                            { groups.map(currentCourse => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Course course={currentCourse} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No courses found" }
            </div>
        )
    }
}
export default CourseList;