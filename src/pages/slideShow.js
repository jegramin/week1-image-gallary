import React from 'react'
import { Link } from 'gatsby'
import styles from './style.module.css'
import Layout from '../components/layout'
import axios from 'axios'
// let imgArr = ['data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUXFRUWFRUVFRUQEBUVFRUWFxUVFRcYHSghGBonGxcVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0fHR0tLS0tKy0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLSstLS0rLS01LS0rLS0tLS0tLSstLf/AABEIALQBGQMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAIFBgABBwj/xAA+EAABAwIEAwYEBQMDAgcAAAABAAIRAyEEEjFBBVFhBhMicYGRobHR8BQyQsHhFVLxU2KSI7IWFzNUY3Ki/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAJBEAAgICAwADAAIDAAAAAAAAAAECEQMhBBIxE0FRImFScfD/2gAMAwEAAhEDEQA/AMdjOO1sRoHfsl6fDXuPidHQXKdY4aBM0ypynIMUmKN4XT3k+ZK9/B0h+get028pV708NihW0GDRrfYJqjTHJKtqI9Gup5U6Hx6ZY0mwpPqpX8QF46ouOnZ1BC9SYlC9M4YrrhGkc8m5MOGo1Ni5jUwG2SznoaENidVqGGIlY3UqJEiRI5XE+oXOXZ5TYufhnPOVjS4nQBanhWCwtQAtnONabzP+QrCsS3QZY0gAW9FRNx8JySl7o+ev4DXJIIAI1BMx7Ij+zbmiX1AJsBH7krX4p8zpPMb+arDSJBGm4/hP88zfDD/ZjMVgy1xaSD0NpHTYqoxnDYMgZTy29F9GOAbUp5TrB9FWUOBkh4qfpB8I3jTy2TQ5Kd9gSwf4mIwuNq0iBePh6LT0+1eYNDvHGhdDj1uVU4/CGmcpuCOXwPVU2JoFhkN8PvHnyXVpohbWmbbDYxtZxylonSPyyTYXSfE6b2HxAjrq0+R0KymE4iWmRYa+q02A7VODSDlIMAtfBZvqN0iik7QG21sT7xeF6adWpPElgk70w6iBMTZxcDrpA2T7ey1SpJoVGPtOVx7t/wAbfFUTQpS5l7nRcVw6tRMVabmRuR4fR2hQCmMSzLT9kOPNpDuaphskscdGzqHdJv6rLNXPCnkxxyR6yHhNwdo+y0CHjMCCDuIMoFGllfl0afyzfKf7fJfPeymHe8kvq1GUGXIY4gud+ljdhqZPXmQtth+MszGmKLCYMiXucABJJeSdtzC4FxYxk1d/0dMuQ2vKHeJflf4b5XbTBNhqvmDqfiFMg5Zu4X1Nz98loeLdtYf3TBnJbkzj8ji6chjZw+Me1Z+Df3ZqZm+ES4TLwOccrruho5WUjnXhchqcqligmVE3TqqraUwx6nKCYR2pVS7nSokrwBFKgpBGAoglSpBEdAQkE5rkRr0DMpNKkoKw934MBOYZJsT2GQn4PEcYUUFQpogC5ZNnTFIUrtXUimalKUMUSFoRsGSSiOYKqWkOaYPNM47i7hGaZOp2S+HYi4zCNeBOux5fwncWlomp36esq5xOcen8IrDczJHPopU+G1KYjJNtr/FTNV0fl0XO5ditUDonWP5XV6uuU+K4da+xufZSy5hcZTzufhsl+4yuLiCebtbLa9GTpHmK4KzEUwJuGwDNg7qsNVwxpvdTeLtJBGx6+S3+Drw1wJAEjKRYja/zWf7W0g8Mrtj8oY4jePyu/b2XRxs38ujJ8jEnHsigDhpZI4jBtMwMvlHy0TLRdSLV3pHFRWDBHUPM9QP2VjguLYigfCPDv+o/C64MUnMWBYxh+1jw7xkzuZufPmOitKfEcNWu+lTPUTScfMsIn1lULcOHWLZ6RJ9FX4p7KRLWnaZnToFvA3ZrRw7DH8tSozoctQD2A+aBU4Sw/lrj1YW/IlZGniqr5yZjzi/l+6JnxAvlf7FazdTa0H1WUm0mVGAXOYAz4jPlN9USkXUCQ6rqPFkkuO8XusT+NxA2f/xMKVbieIcZIfbUhpH+EFFB2bviGOomkWsY+LZiSGmOQ1vtPJUwmRlpBkC8VXl19YMZDIm0eyy7uJPDpLiHchmAjllNoUaXFJPiJLRMNGk7b6LUgGmdwipqwZ2xIIif+MzPuo/02t/pVP8Ag76KvodonAQYJ2IJBEfpPMJv+vn+4+4+iYGxHuV2WFYOoLzuULNYqxqPTpI7aKYo0kjlRRKwbaKFWpkK0FIINanKTsGiocCp0kw+ijUaKexKPcPTVgynCHh6cJ0iynLY60CY5GBQcqK0qUolIyGqJlH7pJ0CrBjkI6DLZ1Ni8xdWAovqQksXUkJ0rJPQTA9ou7dkqklhtmN8vK3KVd1RLQ4Oa6RIi4jn5LAYtpXYXGVGDKHHKdWycp+m+iXNx+24+j489akazFVXRmLoaNYkn4ShYmoGNLnuJABs27tdI53Puqc8bdAAptGk6mw2E/vKnW4yC0RS8W7pjysuF8XN/wAzp+bF+lnVfJkEZY0vPlolMTApOYIDCCLzaRrHSx9FXni9TkPoOSFXx9V9yY9JHxVsfGypqycs8K0I1sG+mYqMLZ0kWPkdD6LzKnsJjqrLB0t3abtPmNCmDWpu/PRaDzZNM/C3wXpW/s5dMpw1GpYYu0gDckw0ev0U+IYmjRgtBcTMtfJDQNLgAOmfSOqpcdxl7wIcIjRtsokiOn8hGxerbLOnxulRs1pLrteSPEQRcCdPTpdUv9PdWcHgeAuBuctt45hOcJ4X3kVKg1u0Hccz0/laFmHSykgv8Qhh8O1tmtAHICAiPYn24de1KCHcFFVkVjwqqWExqvG0EtjHljgOaKlbAy3qQ7/qVA0luji0Fw5QSFm+IYsVDDgwtmB4RMecKzx1Z7mBjWyIuVn6vCaoMwYTxpemlf0G/o9L+z4u+qB/QW/6lT3b9Fe4FuZotcWTHcJHIyJ1MMg/h1fOwyG7CoWZFOKKLTpKwOGXncQpyZaArCG9ibfTQyxBBkxF9NGpU0QsRabUzYi9PaVNNMao0wjBJY7QF1NRLEZyk1qLEQCkITdN6BUbCiHpaKqQaoUvUajSvMqPahXGypxNFKigrp9JCNBOpk3ArBQRBhk8Kav+G8BzUxVquysOjR+Z3WdlrbNGFukZH8MmcNwt77MY53kLe+i2lFtKnZrAOUXd5lxTBxTzvAHLRMdS4cvsxzOzdY3ygdC9s/NSPZ6uDanPUOYR81qsRXn7uUtUc11nNDuUgOCNWUXDR864/wBmsU6qB3LgCAM2WQOclqdqdn2FjGOY4Bm2UtLpiZOuonfUram0EEgTEAuaRMRN4jl5LnY0S4Fz9QR+Z4dt1hav7GfE/Chw/CXuEgNvEXA6AfwmXcIqATlkDXLLotN/RWFd2e5JkzH5SSLTAAuNNV5hsQWAjxRAi2U20g7RJQ6oz4arRU9woupLV08UHNLX+OREz6X1zX3vCQxvDBk7ymSf9v5vYgJJY2vDmlj6+lB3KDjcK0tvsn2CTCpe0vEe7blHqlgm3olOkidOq0b6bqx4ZiWvcGwCsNw/HZrG4Wn4W4MAcLBXmhIyLfG4VgecnqEt3SNh6udzjCnnHIpOrYLouThkN9FWjmID2JTFW6khvpKyLEOqxAdFQ+ml3sVo+kg1KS10arKwMXpCcFJRq00jkPGDSABym2ohvCDJlMjNjrSiNKTY9HBWbFSJVnJRz0Sq9LOKKMN06iZYVVsKsMOUskUiwxaoOYjLm08xgfVIgtBeG4elZ7/EZ8NPYnQAgXM3PkPa1r4oxDjJ/VfwzAsOQi0JZ1QsaPDMDK2BBE2k7iYJPU9EsanvIaAATJPlpsujxHfx8KSX6POy2Jkj7myjVr5tCAPYWKUGKtlOyTxlduobmi8SA7pqgdsMVvY+K5uAJ8tYHnp7qAqGCW21M2iLeV7qtzktuXA3BGa8dSNUw2pYcrbW+XqmHcUgr6hgiJvJMxpzt5+SXZW8RJiwIbBztEbzAGyG5xMkOgWBEB0joZsUGhUBcZN+RJB9QPZMJQ8ajm6ANg3dHj1JG0cl5+IJDs0zNjGWI1FtLfJAr1G+KXtMX01HP/clXl1osNbTmPMOMx/hBBatfha0KpBaDAzHYk20JPu0yRFtrpyhiXAxob+VtYE3i/Ow9s3Sa0DwwZJJDfC4RuYFufoiuJM3N4lxMVGutdpA5W2tqmRz5sSew3aLvGN7ymLWD9AWkwM0aQTy/e3zviBqVn5RJJN19Ra4vZkIsQWHWCCBPmYO/ISqDg3Be6kuguk39dUypHi8iHV2Uw7OZKYLT4okp3g4zMh5iOa0PdrHdqA6m7K3e8DdBb0yCdM2fBTTfIY8GNVafgvuy+e9msDVjNmLJWtyVP7z7pW0tFKb+jWPCBUTVQJZ4UwC5UXqTgvClYyFnBAqNTTwhwpTZ0QVi7aaDVanXBLvapJuy8kkhE0kN9JWJYomkqqRBxK3IUWE53IUXU0yditUIOCi6mmXMUXJxEJAXTlEoRbdFphb03gxmR8MQLutoPdDosQqtUQQYAvMzeMx5iZg67eS0FsthXaSGH15INwIkNPTmd9T6lLvru5ti5mfFPy5JXvYJuTOkmQANABsPqgTJkane02nn9/BWPXxIsW1tok7n5lAfiJ2MT5E2XVXZQTIsPS6RfXk2uY9efL4aWQrZTvrQ4yoJmLTN5nmbrz8Te7g4RNjMAyYteZlIisBBmDGsZonQe3TyXOr8jAA2AmdyIiTfdail62OPqzBm/WNOU7IeFrQbggkTrJj7HNBqVj4baC8Ha/LT780vQxF9rbB23kfoiloV0WD3NdqM0HlmOo0++SDXrtIg+oPht8b9Es+vN5k+Q2O0D4lCdW5n+DrfKJnpdFIVvQ2BJsLb+UGPvzTLcxEgOcCLFsuA1kER8FWMdOlvQadDsbahd+KfLnBxaTrBsfXZYEtotcFiiCbT/uAlwAB8LosPvne3woDgY2MfusvRrXgbggxP5Zb9Ad9PVaHs26e8HUH5j6JmeVy4rpY73Cz3aXAjM2oRYarXFqrO0GHc+g8NEmLJUeWYw4t5eAw+HkE7FXmULgtExJF5uFdR0QZVJPZuHhL1AmnhLVFMAq8KBRXIT0Ag3ILnIjilar1NxsrGdHOehZ0GpWQDXussZnlHw9EYEiyonaJU5qi0HZJwQiEwWqD6aMJAyRE6jUpVKcrhV2JerXZGqPGvRmOVX38FO4SrKZIWTLnDiyqOJGSbaevmfiArnD6eizfFn+M9fPSwhaC/kdHGeyL3XmfhAne3nPovKNQyBEmSdLxefhJSOJqw2etzeZvA+aFRrzEf55jX7jqrNHq43ossTVsZnpr+ySNU879bfH0CjVq2M+3WUg6rt7W6jnsjRoMd77r8J9D9UTv79IBgGDty2/lV/fc9NyImPv5qIraGb3vYHQD0G2iFFoz0WVbFSR0jQz6zz9LIdOqL3O8STli0aj4JTvRMk3AAuZt0ttOyjRf6Tp/kooSb2P1nneBzO1rWJIj+UvUq7Xt1+PRCNUi3oeX3YIBfLh/On381hW9DoqC8aafDQ/e6K14IgG8T18ko2pv5fT1Uu8EabFYEp6HMPUkkTrE+8+i1HZEeKr6fP8AhY7Cvv1W27FtllR/NwHsJP8A3LM87lS/gy+IUSEUhQISnlmE4tiXUsQWtiCdPNE/GORO2OBy1GVhobFV34lqNFIy0fV3paomnpeoohFXhCeEd4QnoBFaqQxDlYVVXYlMhWV1Z6WD7o1dKF11VLRJvZZ0SrHDqnw1RW2FcuTKjtwsfYxSNNSolFK5Ldne4poqMYxUWOWkxgss5xFdeJ2cWVJFM991YcPqKtdqrHhzV0M57svu+IZa52Wd4kx7crnjXNHlP8/FajBtCh2jweegSBdhzjyFnfC/olj6UxS6yMPWcSCOs7coQcPUiPP42XlQ7JXNAO1/P7vCqekp6LCtWvf3/ZIVHbm9+gQ61b2KhUNvuUzDGVB+8H7qHee3S+h+CCH7Lx9SfvXdYopMYfUJBP7yfZdRNhtfy1S73yFzSsbtsbbU20CHTve/P5AfugipNp+mkIlPT1G3LVYVyG5sYMifLp9+ag6qLjXQckIutr6SoB8mVicpD9N0CfuV9M7N4TusNTadSMzvN9/lCwXZvh/4iu1h/K3xv/8AqCLepIHqvqCDPP5M7/ieFBq1mt1MKs4/x+nh2m8u2CwTeJYvFvPdtOXnt/KFHKM9uONio4NafC35rLfj+qBxVrmvLXyCDcFJ5Fuw1H6ZcgPR3oL1EYXeEF6YegPQCK1VW4lWdZVmKTIWRVYhIVCncQVXVSrRIsZoVYVxhKqz9MqwwtZJkhZTHPqzS0qqOKiqKFZNtqrkeLZ2rNo9xT1nMerjE1VT4oK+OFHPkyWVDmXVjgmoDad0/QaGxKdiIusGFZNVXg6gViyqEEaR877RcONCq5seE+Jh6HT209FR1DBnnr9V9T49wsYmkW6OF2O5HkehXzDF0HU3OY8EOBggjRPZ1YstoTf9lcXyFImEFxuYsJm5Rs6FNUe5lzT97qJK8C1h+QKdRf8Ab70XB6jKgCtZu4Rp3R2uj75oLeS9WsEpk3OTGBolzmgRJIAJMC6UbrK3vY/sy8GliakATmay+YCDDnCLTaBrvC1kZ5KRYdkOFvpPqOcwsaG5AXCHPdILnQbx4R7o3aftGzDsIBl+wRu1fGxhqZP6josf2b4I/GVO/rTlmQEThlLs7ZDhHBK2Of3tYkM5c19D4fgadFoaxoEI9Cg1jQ1ogBSQFMT2g7EGvVdVbUidoSX/AJc//IvoUrxazFq5CepuQ3KJUE9AejuQXoGFaqrMUrSqq3FJkCRSYpVtVWeLCrKqtEiz1hTNIpViapphR6jUTTKqQppqmUjQybCPSlZibKE9qVjIrXsI0VfjMW5pV45iS4hg5EopjAMLxktF1ZYPiLneLZZipROi2PBMDNMSEQ9i7wVbMElx3gNPEi/heBDXgX8nD9Q+wnsLQypgICp14fJsdgXUXOp1BJaYkGNRNum69/AU8rSKgLnZszSCCyIiXaGZPst7x/s4MQ4VGuDXgAOkFzXtBsDBkFHx3Z7D1Wsb3TKeVsDugWjc3zEl1zqUvVlllPmWIwtMRDpJ2G3mkTFyAT7DeF9Fd2GpbVX+oaUrV7CO/RWaejmkfIlLUhvlv7MSxoI0hRZSB3WyZ2Dq3Jq0/wD9H9kjxDshWYQGB7yWgu8GVrXbtzSQfNGmZTX6Z91GENtJziABJOgAOvktZg+yNU2e9jRuRLneWwWn4Lw/DYW8eL/UcZf1jl6IJmc6Kzsn2OyEVcQAXatpm4B5v5np7rZVagaJJhI4vijWtzAiNiNfZIUqFTEHM8ltPlu7zTbZCUrM/wAawDsZiGZGk0mnxOOjj0W4wWFbTYGtEABTw9BrBDRARYTikCEOvUDQXOIAGpNgj5VW8f4f39B9PNlJFnHQEblYwt/X8PmDRUBPwTP9Rpf3hfK6/BKlGp/6zHAauAIHkJR/6sf9QewR6jqJ9pJUHKRUSoDAnoTkZwQXoBF6qrcUrKqq7FIoWRSYsKtqhW2IZKXbhlVSSJdWxOnTPJNU6BT1LDhNU6SX5RvjK9tIozArFtAL04NZZAODQkF4Qj1KOVRaxZsaKYu5i9ySCEZ7gENrwlWSPg8sckrEaPDpcD1WkwjMohI0RYJ6kVREmNtUwFBiIEQHQuherljHkL0LgpLGOAXsLgoVa7WiSVjEa+UAlwCw2Pxjq1Q06DehMWCe4txJ+If3NGY/UQtBwPgrKDRa+53RoNlVguFGgKZeS5pdDp/SXaH3gLTBsaL3E0A9hYdCI8uRWd4hx51BgDoztJa6RIdFgWxzsl+wpWjRhBxGNp0xL3AL5txPtdi8xblLekQR5jZXHCeytXEhtbFVC1rgCKbbGDpmO3kmNVejvEe21Jpy02lztoGY+gCrHs4li9Gd0071Dlt0aLracN4Nh6A/6VJresS4+bjdPQgbt+GM4X2PJA/GEPLdGsJDCObt/RW//hjB/wDt6f8AxCvIXkIit2FUSFy5QLg3BCeF4uQMheoFX4kLlywGVWIK8pLlyDGXgw0o7Fy5KMgrahXvfFcuTQFyC9R5lCqPK8XKeYrgQtVcSuptXLkmNbGyvQ0wxCdpPK5cuxHIx6m5emoV6uTiEqbiUV9hK5cgwi5rHovW1j0Xq5JY9EcRXIFl8+7TcVq5suaAeS5cqRFkjWdjsExtMOAubkm5WnXLkWIin7W4l9PDOcxxaZaJGsFwBE7W5LFU8C2rgquKeXd4x/gAdDGw6BA38zK5cshkA7HYNtes3vJPizG9yWiRPqvqa9XIy9NL09C5cuSinLoXLljH/9k=',
//           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYfMPcAxyire9wgMx8r5ePPbLe-U66ky2Rn_6md69I9KgBzRNM',
//           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaa6XJ3vFSqrT4aYXG7L1avuTV6MYcRRmDpxU8LYacMKktNk20g',
//           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqw8RXQ9sKPeuj16k0BpScYIa6OFx8gWP9dYfxF3fQL4aFM4P_',
//           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjnrVFBBKnLmBOabQFNsQ4dxewK5LSNww2pwwFc8-IrApYOtPW0g',
//           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8x8w3TIjjS0HNXNMlTyBZOdPqbE4o8gv_XxIcUGjqRicKFdFNxQ'
// ]



class Header extends React.Component{
  constructor(){
    super();
    this.state={
      className: styles.hide,
      display: '',
      sideBarDisplay: ''
    }
    this.appearIt =this.appearIt.bind(this);
  }
  appearIt = ()=>{
    return(
      this.setState({
        className: styles.shown,
        display: 'none',
        sideBarDisplay: ''         
      })
    )
  }
  hideIt = ()=>{
    setTimeout(() => {
      this.setState({
        sideBarDisplay: 'none' 
      })
    }, 500);
    return(
      this.setState({
        className: styles.hidden,
        display: '' 
      })
    )
  }
  render(){
    return(
      <div className={styles.header}>
        <div className={this.state.className} onClick={this.hideIt} onMouseLeave={this.hideIt} style={{display:this.state.sideBarDisplay}}>
        <Link to="/" className={styles.sideLinks}>Home</Link>
        <Link to="/page-2/" className={styles.sideLinks}>Dashboard</Link>
        </div>
        <div className={styles.headerContainer}>
          <button onClick={this.appearIt} className={styles.menue} style={{display:this.state.display}}>j</button>
          <h1>We Come With More Than {imgArr.length} Shoots!</h1>
        </div>
      </div>
    )
  }
}



let imgArr
(()=>{axios.get('http://localhost:3000/photos')
      .then((res)=>{
        imgArr = res.data;
      })})()
  class SlideShow extends React.Component{
    constructor(){
      super();
      this.state={
        index: 0
      }
    }
    slideShow = setInterval(()=>{
        this.state.index < imgArr.length && this.setState({
          index: this.state.index + 1
        })
        this.state.index === imgArr.length && this.setState({
          index: 0
        })
      },4000)
    
    render(){
      return(
        <div className={styles.div}>
          <div className={styles.slideShowContainer}>
            <img src={imgArr[this.state.index].url} alt='' className={styles.slideShowImg}></img>
            <div className={styles.imgInfo}>
              <h2>{imgArr[this.state.index].title}</h2>
              <p>{imgArr[this.state.index].discription}</p>
              <p>captured in {imgArr[this.state.index].date}</p>
              <p className={styles.info}>category: {imgArr[this.state.index].category}</p>
            </div>
          </div>
        </div>
      )
    }
  }



  const slideShowPage = () => (
    <Layout>
      <Header />
      <SlideShow />
    </Layout>
  )
  
  export default slideShowPage