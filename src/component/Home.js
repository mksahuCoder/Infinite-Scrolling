

import React, { useEffect, useState } from 'react';
import { useNavigate} from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';

import "../css/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  
  useEffect(() => {
    if(!username){
      navigate("/login")
    }
  },[navigate, username])
  
  // API CALL  start

  const [info, setInfo] = useState([]);

  let getProductList = () => {
    const url = "https://randomuser.me/api/";
    let pageLimit = 10;
    let pageNo = Math.ceil(info.length / pageLimit) + 1;
    const queryParam = "?page=" + pageNo + "&results=" + pageLimit;
    const finalURL = url + queryParam;

    fetch(finalURL).then((result) => {
      result.json().then((res) => {
        const mergeData = [...info, ...res.results]
        console.log(mergeData)
        setInfo(mergeData);
      })
    }).catch((e) => {
      console.log("error", e)
    })
  }

  useEffect(() => {
    getProductList();
  },[])

  const fetchMoreData = () => {
    setTimeout(() => {
      getProductList();
    }, 1000);
    
  }
  
  return (
    <>
      <div className="m-Home">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
            <center><h1>Photo Gallery</h1></center> <br />
              <div className="home">

              <InfiniteScroll
                dataLength={info.length}
                next={fetchMoreData}
                style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '2.5%' }}
                hasMore={true}
                loader={<h4>Loading...</h4>}
              >
                {
                  info && info.length > 0 && info.map((value) => {
                    return(
                      <>

                        <div className="card-m">

                          <div className="img-block">
                            <img src={value.picture.large} alt="picc" />
                          </div>

                          <div className="content-block">
                            <h4><span>{value.name.title}</span> <span>{value.name.first}</span> <span>{value.name.last}</span></h4>
                            <h5>{value.gender}, Age: {value.registered.age}</h5>
                          </div>

                        </div>

                      </>
                    )
                  })
                }
              </InfiniteScroll>

                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
