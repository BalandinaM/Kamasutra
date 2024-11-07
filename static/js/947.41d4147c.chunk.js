"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[947],{947:(A,e,s)=>{s.r(e),s.d(e,{default:()=>F});var l=s(43),r=s(475);var n=s(464),o=s(579);const i=n.Ay.li`
  display: grid;
  grid-template-columns: 1fr 6fr;
  padding: 15px 0;
`,a=n.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  align-items: center;
`,t=n.Ay.img`
  border-radius: 50%;
  border: 3px solid #468f56;
  background-color: #D76F30;
  object-fit: cover;
  width: 40px;
  height: 40px;
`,p=n.Ay.button`
  display: block;
  box-sizing: border-box;
  padding: 3px 10px;
  background-color: #468f56;
  color:#172D13;
  font-size: 12px;
  border: none;
  border-radius: 5px;

  &:disabled {
    background-color: yellow;
  };
`,d=n.Ay.div`
  display: grid;
  grid-template-columns: 6fr 1fr;
  text-decoration: none;
  padding: 10px 15px;
  border: 2px solid #D76F30;
  border-radius: 15px;
  background-color: #D76F30;
  color: #172D13;
`,c=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: space-between;
`,g=n.Ay.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`,f=n.Ay.p`
  font-size: 20px;
  margin: 0;
`,u=n.Ay.div`
  text-align: right;
  font-size: 12px;

  & p {
    margin: 0;
  };
`,C=A=>{let{user:e,followingInProgress:s,unfollow:l,follow:n}=A;return(0,o.jsxs)(i,{children:[(0,o.jsxs)(a,{children:[(0,o.jsx)(r.k2,{to:"/profile/"+e.id,children:(0,o.jsx)(t,{src:null!=e.photos.small?e.photos.small:"data:image/png;base64,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",alt:`\u0424\u043e\u0442\u043e ${e.name} ${e.surname}`,width:"40",height:"40"})}),e.followed?(0,o.jsx)(p,{disabled:s.some((A=>A===e.id)),onClick:()=>{l(e.id)},children:"Unfollow"}):(0,o.jsx)(p,{disabled:s.some((A=>A===e.id)),onClick:()=>{n(e.id)},children:"Follow"})]}),(0,o.jsxs)(d,{children:[(0,o.jsxs)(c,{children:[(0,o.jsxs)(g,{children:[e.name," ",(0,o.jsx)("span",{children:null!=e.surname?e.fullName.surname:"Unknown"})]}),(0,o.jsx)(f,{children:e.status})]}),(0,o.jsxs)(u,{children:[(0,o.jsx)("p",{children:"user.location.country,"}),(0,o.jsx)("p",{children:"user.location.city"})]})]})]},e.id)},v=n.Ay.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
`,x=n.Ay.span`
  font-size: 20px;
  font-weight: 700;
  background-color: #D76F30;
  border-radius: 10%;
  color: #172D13;
  padding: 6px 15px 5px;
`,w=n.Ay.span`
  display: inline-flex;
  padding: 8px 13px 5px;
  border: 2px solid #D76F30;
  border-radius: 10%;
`,y=n.Ay.button`
  border: none;
  border-radius: 10%;
  background-color: #D76F30;
  color: #172D13;
  padding-left: 13px;
  padding-right: 13px;
`,h=A=>{let{currentPage:e,totalUsersCount:s,pageSize:r,onPageChanged:n,portionSize:i=10}=A,a=Math.ceil(s/r),t=[];for(let l=1;l<=a;l++)t.push(l);let p=Math.ceil(a/i),[d,c]=(0,l.useState)(1),g=(d-1)*i+1,f=d*i;return(0,o.jsxs)(v,{children:[d>1&&(0,o.jsx)(y,{onClick:()=>{c(d-1)},children:"PREV"}),t.filter((A=>A>=g&&A<=f)).map((A=>e===A?(0,o.jsx)(x,{onClick:e=>{n(A)},children:A},t.indexOf(A)):(0,o.jsx)(w,{onClick:e=>{n(A)},children:A},t.indexOf(A)))),p>d&&(0,o.jsx)(y,{onClick:()=>{c(d+1)},children:"NEXT"})]})};const B=n.Ay.section`
  padding: 25px;
`,k=n.Ay.h2`
  font-size: 20px;
  text-align: center;
`,z=n.Ay.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
`,D=A=>{let{currentPage:e,totalUsersCount:s,pageSize:l,onPageChanged:r,usersData:n,...i}=A;return(0,o.jsxs)(B,{children:[(0,o.jsx)(k,{children:"\u0414\u043e\u0431\u0430\u0432\u044c \u0435\u0449\u0435 \u0434\u0440\u0443\u0437\u0435\u0439!"}),(0,o.jsx)(z,{children:n.map((A=>(0,o.jsx)(C,{user:A,followingInProgress:i.followingInProgress,unfollow:i.unfollow,follow:i.follow},A.id)))}),(0,o.jsx)(h,{currentPage:e,totalUsersCount:s,pageSize:l,onPageChanged:r})]})};var L=s(3),b=s(653),j=s(163),M=s(923),m=s(789);const q=A=>A.usersPage.usersData,P=A=>A.usersPage.pageSize,Z=A=>A.usersPage.totalUsersCount,V=A=>A.usersPage.currentPage,U=A=>A.usersPage.isFetching,W=A=>A.usersPage.followingInProgress;class O extends l.Component{constructor(){super(...arguments),this.onPageChanged=A=>{this.props.getUsers(A,this.props.pageSize)}}componentDidMount(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}render(){return(0,o.jsxs)(o.Fragment,{children:[this.props.isFetching?(0,o.jsx)(j.A,{}):null,(0,o.jsx)(D,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,usersData:this.props.usersData,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress})]})}}const F=(0,M.Zz)((0,L.Ng)((A=>({usersData:q(A),pageSize:P(A),totalUsersCount:Z(A),currentPage:V(A),isFetching:U(A),followingInProgress:W(A)})),{follow:b.e6,unfollow:b.X2,setCurrentPage:b.Tm,toggleFollowingProgress:b.tL,getUsers:b.lo}),m.H)(O)}}]);
//# sourceMappingURL=947.41d4147c.chunk.js.map