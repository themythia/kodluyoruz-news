// /*Axios ile Deneme */

// import React, { useEffect, useState } from "react";
// import Axios from "axios";
// import Spinner from "../Spinner/Spinner";
// // import classes from "./NewsList2.module.css";
// import { Link, withRouter } from "react-router-dom";
// import moment from "moment";
// import XMLParser from "react-xml-parser";
// import Parser from "html-react-parser";

// function NewsList2(props) {
//   const [post, setPost] = useState([]);
//   const [err, seterr] = useState(null);
//   const [loading, setloading] = useState(true);
//   const [cat, setCat] = useState(null);
  

//   let url1 = `https://cors-anywhere.herokuapp.com/https://www.ntv.com.tr/saglik.rss`;
//   if (cat === undefined || cat === null) {
//     url1 = `https://cors-anywhere.herokuapp.com/https://www.ntv.com.tr/saglik.rss`;
//   } else {
//     url1 = `https://cors-anywhere.herokuapp.com/https://www.ntv.com.tr/saglik.rss`;
//   }

//   useEffect(() => {
//     setloading(true);
//     setCat(props.location.state);
//   }, [props.location.state]);

 
//   useEffect(() => {
//      // console.log(props.location.state,url1,cat)
//     Axios.get(url1, {
//       headers: new Headers({
//         Accept: "text/html",
//         "content-type": "application/x-www-form-urlencoded",
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET, POST, PUT",
//         "Access-Control-Allow-Headers": "Content-Type",
//       }),
//       mode: "no-cors",
//     })
//       .then((d) => {
//         let p = [];
//         var xml = new XMLParser().parseFromString(d.data);
//         let news = [];
//         console.log(xml);
//         var mainChildrens = xml.children;

//         mainChildrens.forEach(mainChildren => {
//           if(mainChildren.name == "entry")
//             {
//               news.push(mainChildren.children[6]);
//             }
//         });
        
//         /*for (let i in news) {
//           if (
//             news[i].children !== null &&
//             news[i].children !== [] &&
//             news[i].children.length > 0
//           ) {
//             p.push(news[i].children);
//           }
//         }*/

//         console.log(news);
//         news.forEach(newsSingle => {
//               console.log(newsSingle.children[0].value);
//               console.log(newsSingle.children[1]?.children[0]?.children[0]?.attributes?.src);
//         });
//         console.log(p);
//         setPost(p);

//         setloading(false);
//       })
//       .catch((e) => {
//         setloading(false);
//         console.log(e);
//         seterr(e);
//       });
//   }, [url1]);

//   let posts = post.map((p, index) => (
//     <Link
//       className={classes.colors}
//       key={index}
//       to={{
//         pathname: `${props.location.pathname}/${index}`,
//         customObject: p,
//         state: [
//           p[0].value,
//           p[1].value,
//           p[7].value,
//           p[9].attributes.url,
//           p[3].value,
//         ],
        
//       }}
//     >
//       <div className={`card ${classes.card}`} style={{}}>
//         <div className={classes.cardhorizontal}>
//           <div className="img-square-wrapper">
//             <img className="" src={p[9]?.attributes.url} alt="Card  cap" />
//           </div>

//           <div  className={`card-body ${classes.cardbody}`}>
//             <h4 className="card-title">{p[0]?.value}</h4>

//             <div className={`card-text ${classes.limit}`}>
//               {Parser(Parser(p[7]?.value))}
//             </div>
//           </div>
//         </div>
//         <div className="card-footer">
//           <small className="text-muted">
//             {moment.utc(p[3].value).format("llll")}
//           </small>
//         </div>
//       </div>
//     </Link>
//   ));

//   let rendered;
//   let error;
//   let errorMsg;
//   if (err && !loading) {
//     console.log("Errtor is :", err);
//     error = err.code ? err.code : err.name;
//     errorMsg = err.message;
//     rendered = (
//       <>
//         <h2 className="red center">{error}</h2>
//         <p className="errorMessage center">{errorMsg}</p>
//       </>
//     );
//   }

//   if (loading) {
//     rendered = <Spinner />;
//   }
//   if (!loading && posts.length > 0) {
//     rendered = <div>{posts}</div>;
//   }

//   return (
//     <div>
//       <div className="container">{rendered}</div>
//     </div>
//   );
// }

// export default withRouter(NewsList2);