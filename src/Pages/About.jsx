import React from "react";
import { Navbar } from "../Components/Navbar";
export const About = () => {
	return (
		<>
			<Navbar />
			<div className='p-10 font-PlayfairDisplay text-4xl text-sky pb-10 sticky  top-0 bg-black text-center'>
				Research Paper
			</div>

			<div className=' relative p-5 border-white h-[78vh]  w-[80%]  mx-auto  overflow-hidden hover:overflow-y-scroll transition-overflow '>
				{/* Problem */}

				<p className='text-white font-OpenSans text-xl text-clip  mb-10  '>
					<h1 className='pb-2 font-Questrial text-4xl text-lavender '>
						INTRODUCTION
					</h1>
					The news information can be easily accessed through Internet and
					social media. It is convenient for user to follow their interest
					events available in online mode. Mass-media playing a huge role
					in influencing the society and as it is common, some people try
					to take advantage of it. Sometimes mass media modulate the
					information in their own way to reach their goal. There are many
					websites which provide false information. They consciously try to
					bring out propaganda, hoaxes and misinformation under the guise
					of being authentic news. Their primary purpose is to manipulate
					the information that can make public believe in it. There are
					lots of example of such websites all over the world .Therefore,
					fake news affects the minds of the people. According to study
					Scientist believe that many artificial intelligence algorithms
					can help in exposing the false news. This is because the
					artificial intelligence is now a days be coming very popular and
					many devices are available to check it partially. In this the
					deep learning and machine learning concepts are used to detect
					the fake new using naïve Bayes classifier. The data set is loaded
					for which the news is to be classified and then the data is to be
					split as test and train data and pipelining is to be done to
					detect the accuracy. As the fake news is increasing day by day
					the people are not believing even if the news is real and this
					drifts the thoughts of the common people from the real issue.
				</p>
				{/*Proposed Solution*/}
				<p className='text-white font-OpenSans text-xl text-clip mb-10 '>
					<h1 className='pb-2 font-Questrial text-4xl text-lavender '>
						PROPOSED SOLUTION
					</h1>
					The proposed system uses naïve Bayes algorithm for detecting the
					fake news, it has a higher accuracy level. The data is divided
					here into two parts (test and train). The train data is trained
					and is classified into groups with similar datasets. After the
					data is trained the test data is assig ned to the group which has
					similar characteristics with the group. Now, the naïve Bayes
					algorithm is used to detect the accuracy of the fake news with
					which spams can be stopped. Also here weights are given to each
					and every individual word, the least important word is given less
					weight and most important word is given most weight. Also the
					tfidf vector is used to count the number of word and also the
					number of unique words is counted and at the same time the
					weights are allotted to each and every word. In this way the
					unimportant words are not taken into consideration and the
					accuracy of only important words are matched and detected from
					the dataset, this saves the time to detect the accuracy of the
					news.
				</p>
				{/* System Architecture */}
				<p className='text-white font-OpenSans text-xl text-clip mb-10  '>
					<h1 className='pb-2 font-Questrial text-4xl text-lavender '>
						SYSTEM ARCHITECTURE
					</h1>
					The first step in the detection of fake news is extracting the
					training data either by downloading it from a file or from
					online. There are two methods to count the words. The Fit method
					and the Transform method. The fit method is used to give a
					specific serial number to each and every word and the transform
					method is used to count the number of times a particular word is
					occurring in the data set. Instead of using both the methods
					separately we can use it as a whole single method called fit
					transform method which helps us in saving both the space and
					time. Term frequency is required to count number of times a word
					is occurring, and inverse document frequency is used to give
					weight to the words. It gives maximum weight to the most
					important words and minimum weight to the least important words.
					So, we club both the methods into a single method to save the
					time and space in the detection called as tfidf which calculates
					the height of a particular word. Now the dataset is split into
					two parts that is test and train dataset. Now multinomial Naïve
					Bayes algorithm is used to classify the train data in groups of
					similar entities. The test data is no matched with the group of
					the train data it’s matching with. After the data is matched
					naïve Bayes algorithm is applied to the test dataset and the
					probability of each and every word is checked and approximate
					percentage value is calculated and in this way the accuracy of
					the fake news is determined. Therefore, in this way it is
					determined whether a given news is fake or real.
				</p>
				{/* Conclusion */}
				<p className='text-white font-OpenSans text-xl text-clip mb-10 '>
					<h1 className='pb-2 font-Questrial text-4xl text-lavender '>
						CONCLUSION
					</h1>
					By leveraging the Naïve Bayes theorem, we unlock a powerful
					mechanism to swiftly classify news articles as either authentic
					or fabricated, regardless of dataset size. This methodology
					efficiently compares incoming news pieces with existing data
					points, offering rapid insights into their credibility. This
					capability holds profound implications, empowering users to make
					informed judgments about the veracity of news reports in
					significantly reduced timeframes. Furthermore, this approach
					instills confidence in users' perceptions of news reliability. By
					swiftly analyzing and categorizing news articles, it fosters a
					sense of trust and credibility in the information presented.
					Users can rely on this system to discern between factual and
					deceptive content, fostering a more discerning and critical
					approach to media consumption. In essence, the application of the
					Naïve Bayes theorem not only accelerates the process of news
					classification but also cultivates a culture of trust and
					confidence among users. Its ability to swiftly differentiate
					between authentic and fake news articles ensures that users can
					navigate the ever-expanding landscape of media with clarity and
					assurance.
				</p>
				{/* references */}
				<p className='text-white font-OpenSans text-xl text-clip  '>
					<h1 className='pb-2 font-Questrial text-4xl text-lavender '>
						REFERENCES
					</h1>
					[1] Marco L, E. Tacchini, S. Moret, G. Ballarin, “Automatic
					Online Fake News Detection Combining Content and Social Signals,”
					[Online]. Available:
					https://en.wikipedia.org/wiki/Fake_news_website. Accessed Feb. 6,
					2017. [2] Z. Jin, Juan Cao, (2017, Dec. 16), “News Credibility
					Evaluation on Microblog with a Hierarchical Propagation Model,”
					Fudan University, Shanghai, China. [3] Conroy, N. Rubin and Chen.
					Y, “CIMT Detect: A Community Infused Matrix-Tensor Coupled
					Factorization,” 52(1), pp.1-4, 2018 [4] Markines, B. Cattuto, C.,
					& F. Menczer, “Hybrid MachineCrowd Approach,” (pp. 41-48), April
					2018. [5] H. Shaori, W. C. Wibowo, “Fake News Identification
					Chatacteristics Using Named Entity Recognition and Phrase
					Detection,” 2018, 10th ICITEE, Universitas Indonesia. [6] Shivam
					B. Parikh, Pradeep K. Atrey, “Media-Rich Fake News Detection: A
					Survey,” 2018, IEEE Conference on Multimedia Information
					Processing and Retrieval (MIPR). [7] Kai Shu, Suhang Wang, Huan
					Liu, “Understanding User Profiles on Social Media for Fake News
					Detection,” 2018, MIPR. [8] Stefan Helmsetter, HeikoPaulheim,
					“Weakly Supervised Learning for Fake News Detection on Twitter,”
					IEEE, May 2018, ASONAM. [9] Cody Buntain, Jennifer Golbeck,
					“Automatically Identifying Fake News in Popular Twitter Threads,”
					April 2017, IEEE on SmartCloud (SmartCloud). [10] AmitabhaDey,
					RafsanZani Rafi, ShahriarParash, “Fake News Pattern Recognition
					using Linguistic Analysis,” 2018, ICIEV and ICIVPR. [11] Mehmet
					Sevi, Mehmet Salur, “Detection of Fake Twitter Accounts with
					Machine Learning Algorithms,” April 2018 International Conference
					on Artificial Intelligence and Data Processing (IDAP). [12]
					Zhiwei Jin, Juan Cao, Qi Tian, Y. Zhang “Novel Visual and
					Statistical Image Features for Microblogs News Verification,”
					2017 IEEE, Volume: 19, Issue: 3.
				</p>
			</div>
		</>
	);
};

export default About;
