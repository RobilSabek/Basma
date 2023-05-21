import './styles.css'

export default function App() {
  return (
    <div className='background-container'>
      <div className='content-holder'>

        <div className='babil-icon'>
          <span className='babil-icon-text'>الأخبار المحلية</span>
          <img src='./icons/babil.jpg' alt='babil' />
        </div>

        <div className="header-container">
          <ul className="menu-list">
            <li className="menu-item">أراء</li>
            <li className="menu-item">فيديو وصور</li>
            <li className="menu-item">ثقافة</li>
            <li className="menu-item">رياضة</li>
            <li className="menu-item">اقتصاد</li>
            <li className="menu-item">أخبار</li>
            <li className="menu-item menu-item-last">الرئيسية</li>
          </ul>
          <div className='text-container'>
            <h1>خلافًا للاعتقاد</h1>
            <p>لوريم ايبسوم ليس له جذور في الأدب اللاتيني الكلاسيكي</p>
            <p>منذ عام 45 قبل الميلاد مما يجعله أكثر من 2000 عام في القدم</p>
            <button className="more-button">المزيد</button>
          </div>
        </div>

        <div className='main-news-container'>
          <div className="news-container">
            <div className='w-50'>
              <div className='news-1'>
                  <div className='news-1-img'></div>
                  <div>
                    <div className='news-1-text'>
                    <figcaption>اقتصاد</figcaption>
                    <button className="more-button2">المزيد</button>
                    </div>
                  </div>
              </div>
            </div>
            
            <div className='w-50'>
              <div className='news-1'>
                  <div className='news-1-img img2'></div>
                  <div>
                    <div className='news-1-text'>
                    <figcaption>رياضة</figcaption>
                    <button className="more-button2">المزيد</button>
                    </div>
                  </div>
              </div>
            </div>

            <div className='w-50'>
              <div className='news-1'>
                  <div className='news-1-img img3'></div>
                  <div>
                    <div className='news-1-text'>
                    <figcaption>فيديو وصور</figcaption>
                    <button className="more-button2">المزيد</button>
                    </div>
                  </div>
              </div>
            </div>

            <div className='w-50'>
              <div className='news-1'>
                  <div className='news-1-img img4'></div>
                  <div>
                    <div className='news-1-text'>
                    <figcaption>ثقافة</figcaption>
                    <button className="more-button2">المزيد</button>
                    </div>
                  </div>
              </div>
            </div>

          </div>
          <div className="news-container">
            <div className='w-100'>
              <div className='news-1'>
                  <div className='news-1-img img5'></div>
                  <div>
                    <div className='news-1-text'>
                    <figcaption>أخبار</figcaption>
                    <button className="more-button2">المزيد</button>
                    </div>
                  </div>                
              </div>
            </div>
            
          </div>
        </div>

        <hr/>

        <div className='reading-passion'>
          
          <div className='w-50'>

            <div className="reading">
              <h1>الأكثر قراءة</h1>
              <div className='reading-open'>
                <div className='reading-open-header'>
                  <h2>الكلمات العشوائية</h2>
                  <div className='minus'>-</div>
                </div>
                <div className='reading-open-text'>
                هناك العديد من الأنواع المتوفرة لنصوص لوريم ايبسوم. ولكن الأغلبية تم تعديلها بشكل ما عبر إدخال بعض النوادر او الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم ايبسوم، عليك أن تتحقق أول أن ليس هناك اي كلمات او عبارات مح
                </div>
              </div>
              <div className='reading-1'>
                <h2>هناك العديد من الأنواع المتوفرة لنصوص لوريم ايبسوم. ولكن الأغلبية تم تعديلها بشكل ما عبر إدخال</h2>
                <div className='plus'>+</div>
              </div>
              <div className='reading-1'>
                <h2>هناك العديد من الأنواع المتوفرة لنصوص لوريم ايبسوم. ولكن الأغلبية تم</h2>
                <div className='plus'>+</div>
              </div>
              <div className='reading-1'>
                <h2>هناك العديد من الأنواع المتوفرة لنصوص لوريم ايبسوم</h2>
                <div className='plus'>+</div>
              </div>
              
            </div>

          </div>

          <div className='w-50'>
            <div className="passion">
              <h1><span>شغفٌ</span> متواصل</h1>
            </div> 
          </div>
        </div>

        <hr />

        <div className='footer'>
          
          <div className='w-50'>
            <div className='footer-text'>
              <div className='w-30'>
              <h2>بما تتطلبه</h2>
              
              <p>هناك العديد من الانواع بعض اللوادر أو الكلمات عليك أن تتحقق أولا أن</p></div>
              <div className='w-30'>
              <h2>بما تتطلبه</h2>
              
              <p>هناك العديد من الانواع بعض اللوادر أو الكلمات عليك أن تتحقق أولا أن</p> </div>
              <div className='w-30'>
              <h2>بما تتطلبه</h2>
              
              <p>هناك العديد من الانواع بعض اللوادر أو الكلمات عليك أن تتحقق أولا أن</p>
              </div>
              </div>
          </div>
          <div className='w-50'>
           
              <h2>مشاهدة على تويتر</h2>
              <div className='footer-1'>                
                <div className='footer-search'>
                  <input type="text" />
                  <button>الاشتراك</button>
                </div>
                
                <img src='./icons/twitter.jpg' alt='babil' />
                <img src='./icons/facebook.jpg' alt='babil' />
                <img src='./icons/linkedin.jpg' alt='babil' />
                
              </div>
              
            
          </div>
        </div>

        <div className='copy-right'>
          Copyright(c) website name
        </div>
      </div>




    </div>
  )
}
