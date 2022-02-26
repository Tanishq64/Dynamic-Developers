import React from 'react'

import Header from './header'
import projectStyles from '.style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['Hero']}>
        <Header></Header>
        <div className={styles['container01']}>
          <h1 className={styles['text']}>
            <span>
              The Future is now
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <span></span>
          </h1>
          <div className={styles['container02']}></div>
          <span className={styles['text04']}>
            <span className={styles['text05']}></span>
            <span className={styles['text06']}></span>
            <span>
              &quot;Artificial Intelligence is the next major revolution of our
              times&quot;
            </span>
            <br></br>
            <span className={styles['text09']}>
              -Sheikh Mohammed bin Rashid Al Maktoum
            </span>
            <br></br>
            <br></br>
            <br></br>
            <span></span>
            <span></span>
          </span>
          <span className={styles['text14']}></span>
          <img
            alt="image"
            src="/playground_assets/gray-vector.svg"
            className={styles['image']}
          />
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className={styles['image1']}
          />
        </div>
        <h6 className={styles['text15']}>
          <span>WITH BURNED SOLES</span>
          <span></span>
        </h6>
        <div className={styles['Features']}>
          <h1 className={styles['text18']}>All these impressive features</h1>
        </div>
      </div>
      <div className={styles['Section1']}>
        <div className={styles['Container03']}>
          <h3 className={` ${styles['text19']} ${projectStyles['healine']} `}>
            Artificial Intelligence
          </h3>
          <span className={` ${styles['text20']} ${projectStyles['textXL']} `}>
            <span className={styles['text21']}>
              Artificial Intelligence is the stimulation of human intelligence
              processes by machines, especially computer systems. 
            </span>
          </span>
        </div>
        <div className={styles['container04']}></div>
        <img
          alt="image"
          src="/playground_assets/white-vector.svg"
          className={styles['image2']}
        />
      </div>
      <div className={styles['Section2']}>
        <div className={styles['container05']}>
          <h2 className={` ${styles['text22']} ${projectStyles['text2XL']} `}>
            <span className={styles['text23']}>Transportation</span>
          </h2>
          <span
            className={` ${styles['text24']} ${projectStyles['textXL']} `}
          ></span>
        </div>
        <div className={styles['GrowingCompanySection']}>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1577547622647-7b0742f47180?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHNlbGYlMjBkcml2aW5nJTIwY2Fyc3xlbnwwfHx8fDE2NDU4NjExNDc&amp;ixlib=rb-1.2.1&amp;h=1800"
            className={styles['image3']}
          />
          <div className={styles['container06']}>
            <div className={styles['container07']}>
              <svg
                viewBox="0 0 967.4605714285714 1024"
                className={styles['icon']}
              >
                <path d="M822.857 256c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM950.857 91.429c0 189.714-52.571 316-188 452-33.143 32.571-70.857 66.286-111.429 100.571l-11.429 216.571c-0.571 5.714-4 11.429-9.143 14.857l-219.429 128c-2.857 1.714-5.714 2.286-9.143 2.286-4.571 0-9.143-1.714-13.143-5.143l-36.571-36.571c-4.571-5.143-6.286-12-4.571-18.286l48.571-157.714-160.571-160.571-157.714 48.571c-1.714 0.571-3.429 0.571-5.143 0.571-4.571 0-9.714-1.714-13.143-5.143l-36.571-36.571c-5.714-6.286-6.857-15.429-2.857-22.286l128-219.429c3.429-5.143 9.143-8.571 14.857-9.143l216.571-11.429c34.286-40.571 68-78.286 100.571-111.429 142.857-142.286 252-188 450.857-188 10.286 0 19.429 8 19.429 18.286z"></path>
              </svg>
            </div>
            <h3 className={` ${styles['text25']} ${projectStyles['healine']} `}>
              A Link-Making Invention
            </h3>
            <span className={styles['text26']}>
              Artificial intelligence is changing the transport sector. From
              self driving cars, trains, ships and aeroplanes to function
              autonomously, to making traffic flows smoother, it is already
              applied in numerous transport fields. Beyond making our lives
              easier, it can help to make all transport modes safer, cleaner,
              smarter and more efficient. Artificial intelligence-led autonomous
              transport could for instance help to reduce the human errors that
              are involved in many traffic accidents.
            </span>
            <div className={styles['container08']}>
              <div className={styles['container09']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
                  <path d="M636 938h-6q-92-24-158-90-38-38-65-103t-27-119q0-52 38-89t92-37 93 37 39 89q0 34 25 58t63 24 64-24 26-58q0-120-91-206t-219-86q-92 0-168 47t-114 125q-24 50-24 120 0 80 28 154 6 20-14 26t-26-12q-32-82-32-168 0-78 30-138 42-90 129-144t191-54q146 0 249 99t103 237q0 52-39 88t-93 36-92-36-38-88q0-34-26-59t-64-25-63 25-25 59q0 112 80 192 56 56 140 78 18 2 14 26-4 16-20 16zM530 626q0 74 55 128t137 54q4 0 18-2t23-2 18 3 11 13q4 22-18 26-24 4-52 4-80 0-132-38-102-70-102-186 0-22 22-22 20 0 20 22zM416 930q-8 0-14-6-54-54-86-114-46-80-46-184 0-94 71-162t171-68 171 68 71 162q0 20-22 20t-22-20q0-78-58-133t-140-55-140 55-58 133q0 96 38 164 26 46 80 104 16 14 0 30-6 6-16 6zM150 414q-22 0-22-20 0-4 4-12 64-92 160-140 100-52 220-52t220 52q98 48 160 138 4 8 4 12 0 14-16 20t-24-8q-60-82-144-124-92-46-200-47t-200 47q-90 46-146 126-6 8-16 8zM760 190q-8 0-10-2-118-60-238-60-130 0-238 60-10 6-20 0t-10-18q0-14 10-20 116-64 258-64 130 0 258 64 18 10 8 28-8 12-18 12z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['container10']}>
          <h3 className={` ${styles['text27']} ${projectStyles['healine']} `}>
            Healthcare
          </h3>
          <span className={` ${styles['text28']} ${projectStyles['textXL']} `}>
            <span className={styles['text29']}>
              AI is already being used to detect diseases, such as cancer, more
              accurately and in their early stages. According to the American
              Cancer Society, a high proportion of mammograms yield false
              results, leading to 1 in 2 healthy women being told they have
              cancer. The use of AI is enabling review and translation of
              mammograms 30 times faster with 99% accuracy, reducing the need
              for unnecessary biopsies.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              ​The proliferation of consumer wearables and other medical devices
              combined with AI is also being applied to oversee early-stage
              heart disease, enabling doctors and other caregivers to better
              monitor and detect potentially life-threatening episodes at
              earlier, more treatable stages.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
          </span>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGFpJTIwaGVhbHRoY2FyZXxlbnwwfHx8fDE2NDU4NjE0NjU&amp;ixlib=rb-1.2.1&amp;w=1500"
          className={styles['image4']}
        />
        <div className={styles['Team']}>
          <div className={styles['container11']}></div>
        </div>
      </div>
    </div>
  )
}

export default Home
