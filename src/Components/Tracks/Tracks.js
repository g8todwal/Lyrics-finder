import React from 'react';
import { Consumer } from '../../Context';
import Spinner from '../Layout/Spinner';
import Track from './Track';

class Tracks extends React.Component {
	render() {
		return (
			<div className="container">
				<Consumer>
					{value => {
						const {track_list , heading}=value;
						if(track_list === undefined || track_list.length === 0){
							return <Spinner />
						} else{
							return (
								<React.Fragment>
									<h3 className="text-center mb-4">{heading}</h3>
									<div className="row">
										{track_list.map(item => (
											<Track track={item.track} key={item.track.track_id} />
										))}
									</div>
								</React.Fragment>
							);
						}
					}}
				</Consumer>
			</div>
		)
	}
}
 
export default Tracks;