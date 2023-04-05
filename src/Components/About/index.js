import React from 'react';

import CommonButton from '../../Utils/CommonButton';

import pattern from "../../Assets/pattern.png"
import emp from "../../Assets/lady_emp.png"

const index = () => {
	return (
		<div className="about">
			<div className="about-container d-flex">
				<div className="img-container d-flex col-4">
					<div className="img-block">
						<img src={pattern} height="320px" className="pattern-img" alt=":(" />
						<img src={emp} height="220px" className="emp-img" alt=":(" />
					</div>
				</div>
				<div className="text-container d-flex flex-column align-items-start col-6 p-3">
					<div className="about-title d-flex justify-content-center align-items-center">
						<hr />
						<p>about us</p>
					</div>
					<div className="about-content text-start d-flex flex-column">
						<h1>
							More than 23+ years we
							provide <span>IT solutions</span>
						</h1>
						<p>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
							doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo invetore
							veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
							ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugiconsequuntur
							magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quam
							est, qui dolorem ipsum quia dolor sit amet consectetur.
						</p>
					</div>
					<CommonButton className="common-btn black-bg" text="Consultancy" />
				</div>
			</div>
		</div>
	)
}

export default index