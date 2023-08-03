import styled from 'styled-components'

// CyworldWrap
export const CyworldWrap = styled.div`
width: 100%;
user-select: none;
header {
    width: 100%;
    height: 100px;
    background: #f5f1ed;
    h1 {
        position: relative;
        height: 100%;
        img {
            height: 50px;
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
footer {
    width: 100%;
    height: 200px;
    background: #f5f1ed;
    text-align: center;
    font-size: 25px;
    line-height: 200px;
    font-weight: 500;
    font-family:'NeoDunggeunmoPro-Regular';
    color: #FF6600;
}
.main {
    input, button, a, label { font-family: 'SUITE-Regular'; }
}
`

// CyworldHomeContainer
export const CyworldHomeContainer = styled.div`
padding: 50px 0;
box-sizing: border-box;
background-image: url(../images/bg.jpg);
background-size: cover;
background-repeat: no-repeat;
background-position: 0 0;
.home {
    width: 1000px;
    height: 1000px;
    margin: auto;
    border-radius: 50%;
    padding: 200px 0;
    box-sizing: border-box;
    background: #FFF;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    .login {
    width: 700px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 21px;
        p { font-family:'NeoDunggeunmoPro-Regular'; }
        img { width: 200px; }
        h3 {
            font-weight: 700;
            font-size: 35px;
            line-height: 1.3;
            margin-bottom: 30px;
            font-family:'NeoDunggeunmoPro-Regular';
        }
    }
    .user-main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 100%;
        margin: auto;
        .login { margin: 0 }
        .btn {
            width: 750px;
            display: flex;
            justify-content: space-between;
            button {
                width: 350px;
                height: 300px;
                font-size: 30px;
                font-family: 'NeoDunggeunmoPro-Regular' !important;
                padding-bottom: 170px;
                box-sizing: border-box;
                color: #FF6600;
                border-radius: 15px;
                border: 1px solid #BABABA;
                box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
                
                background: #FFF;
                background-size: cover;
                background-repeat: no-repeat;
                &:hover {
                    color: #FFF;
                    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; 
                }
                &.go-hp {
                    background-image: url(../images/go_hp.jpg);
                    &:hover { background-image: url(../images/go_hp_hover.jpg); }
                }
                &.join {
                    background-image: url(../images/join_bg.jpg);
                    &:hover { background-image: url(../images/join_bg_hover.jpg); }
                }
                &.login {
                    background-image: url(../images/login_bg.jpg);
                    &:hover { background-image: url(../images/login_bg_hover.jpg); }
                }
                &.logout {
                    background-image: url(../images/logout_bg.jpg);
                    &:hover { background-image: url(../images/logout_bg_hover.jpg); }
                }
            }
        }
    }
    form {
        width: 510px;
        height: 300px;
        margin: 70px auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        input {
            display: block;
            width: 500px;
            height: 70px;
            border-radius: 50px;
            font-size: 22px;
            text-indent: 20px;
            border: 1px solid #e9e9e9;
        }
        p {
            display: flex;
            justify-content: space-between;
            button {
                width: 240px;
                height: 70px;
                border-radius: 50px;
                font-size: 22px;
                border: none;
                background: #e9e9e9;
                a {
                    font-size: 22px;
                }
                &:hover {
                    background: #FF6600;
                    color: #FFF;
                    a {color: #FFF;}
                }
            }
        }
    }
}
`

// CyworldLoginContainer
export const CyworldLoginContainer = styled.div`
padding: 50px 0;
box-sizing: border-box;
background-image: url(../images/bg.jpg);
background-size: cover;
background-repeat: no-repeat;
background-position: 0 0;
.login {
    font-size: 21px;
    width: 1000px;
    height: 1000px;
    margin: auto;
    border-radius: 50%;
    box-sizing: border-box;
    background: #FFF;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    flex-direction: column;
    .log-title {
        width: 700px;
        margin: 200px auto 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 21px;
        }
    p { font-family:'NeoDunggeunmoPro-Regular'; }
    img { width: 200px; }
    h3 {
        font-weight: 700;
        font-size: 35px;
        line-height: 1.3;
        margin-bottom: 30px;
        font-family:'NeoDunggeunmoPro-Regular';
    }
    form {
        width: 880px;
        margin: auto;
        margin-top: 70px;
        input {
            margin: auto;
            display: block;
            width: 550px;
            height: 70px;
            border-radius: 50px;
            font-size: 22px;
            text-indent: 20px;
            border: 1px solid #e9e9e9;
            margin-bottom: 30px;
        }
        .btn {
            width: 550px;
            display: flex;
            justify-content: space-between;
            font-family:'NeoDunggeunmoPro-Regular';
            font-size: 25px;
            margin: auto;
            button {
                width: 270px; height: 70px;
                border-radius: 50px;
                font-size: 22px;
                border: none;
                background: #e9e9e9;
                &:hover {
                    background: #FF6600;
                    color: #FFF;
                }
            }
        }
    }
}
`

// CyworldJoinContainer
export const CyworldJoinContainer = styled.div`
padding: 50px 0;
box-sizing: border-box;
background-image: url(../images/bg.jpg);
background-size: cover;
background-repeat: no-repeat;
background-position: 0 0;
.join {
    width: 1000px;
    height: 1000px;
    margin: auto;
    border-radius: 50%;
    padding: 100px 0;
    box-sizing: border-box;
    background: #FFF;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-align: center;
    .logo {
        margin: auto;
        img { width: 300px; }
        h2 {
            font-weight: 700;
            font-size: 40px;
            font-family:'NeoDunggeunmoPro-Regular';
            display: inline;
            vertical-align: top;
            margin-left: 30px;
        }
    }
    form {
        width: 880px;
        margin: auto;
        margin-top: 70px;
        input {
            width: 300px;
            height: 70px;
            border-radius: 50px;
            font-size: 22px;
            text-indent: 20px;
            border: 1px solid #e9e9e9;
            &[type="radio"] {
            position: relative;
            cursor: pointer;
            appearance: none;
            border: max(4px, 0.1em) solid #e9e9e9;
            width: 50px;
            height: 50px;
            transition: border 0.3s ease-in-out;
            &:checked { border: 0.4em solid #FF6600; }
            }
            &[type="date"] {
            margin-left: 50px;
            color: #747474;
            padding-right: 50px;
            }
        }
        p {
            display: flex;
            justify-content: center;
            align-items: center;
            font-family:'NeoDunggeunmoPro-Regular';
            font-size: 25px;
            margin: 30px 0;
            input:first-child, #male {
                margin-right: 30px;
            }
            b { margin-right: 30px; }
            label {
                font-size: 25px;
                width: 100px;
                font-family: 'NeoDunggeunmoPro-Regular' ;
            }
            strong { width: 200px; font-size: 15px; margin: 0; margin-left: 30px; color: #FF6600; }
        }
        button {
            width: 280px; height: 70px;
            border-radius: 50px;
            font-size: 22px;
            border: none;
            background: #e9e9e9;
            margin-left: 30px;
            &:hover {
                background: #FF6600;
                color: #FFF;
            }
        }
        .btn { margin-top: 70px; }
    }
}
`

// CyworldDotoriMain
export const CyworldDotoriMain = styled.div`
div {
    width: 800px;
    margin: 100px auto;
    h3 {
        font-family: 'NeoDunggeunmoPro-Regular';
        font-size: 20px;
        font-weight: 700;
        border-bottom: 1px solid #BABABA;
        padding-bottom: 10px;
        margin-bottom: 20px;
    }
    button {
        width: 800px;
        height: 200px;
        font-size: 30px;
        font-family: 'NeoDunggeunmoPro-Regular' !important;

        box-sizing: border-box;
        color: #FFF;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; 
        border-radius: 15px;
        border: 1px solid #BABABA;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        &:hover {
            color: #FF6600;
        }
    }
}
.go-bgm {
    h3 { color: #9F77ED; }
    button {
        background-image: url(../images/go_bgm.jpg);
        &:hover {
            background-image: url(../images/go_bgm_hover.jpg);
            color: #9F77ED;
        }
    }
}
.go-theme {
    h3 { color: #4ADE78; }
    button {
        background-image: url(../images/go_theme.jpg);
        &:hover {
            background-image: url(../images/go_theme_hover.jpg);
            color: #4ADE78;
        }
    }
}
.go-minimi {
    h3 { color: #ed7793; }
    button {
        background-image: url(../images/go_minimi.jpg);
        &:hover {
            background-image: url(../images/go_minimi_hover.jpg);
            color: #ed7793;
        }
    }
}
`

// CyworldMiniHP
export const CyworldMiniHP = styled.div`
width: 100vw;
height: 100vh;
/* background-image: url(../images/skin1.jpg); */
padding-top: 50px;
box-sizing: border-box;
.hp-con {
    width: 1570px;
    margin: auto;
    display: flex;
    .hp-sec1 {
        border-radius: 15px;
        width: 1250px; height: 750px;
        background: #7dc9e1;
        border: 1px solid #818181;
        display: flex;
        position: relative;
    }
    .hp-sec2 {
        width: 250px;
        height: 100%;
        margin-left: 70px;
        border: 1px solid #BABABA;
        a {
            display: block;
            text-align: center;
            padding: 10px;
            background: #e6e6e6;
            box-sizing: border-box;
            line-height: 0;
            border-bottom: 1px solid #BABABA;
            img { width: 200px;}
        }
        .follow {
            height: 70px;
            font-size: 18px;
            background: #FFF;
            text-align: center;
            line-height: 70px;
            border-bottom: 1px solid #BABABA;
            span {
                font-family: 'NeoDunggeunmoPro-Regular';
                display: inline-block;
                font-size: 20px;
                line-height: 35px;
                width: 60px;
                height: 30px;
                border-radius: 15px;
                background: #76c8d4;
                color: #FFF;
            }
        }
        .now-music {
            p {
                font-size: 15px;
                margin-left: 45px;
                padding-top: 11px;
            }
            width: 250px;
            height: 65px;
            background-image: url(../images/music_bg.gif);
        }
        .logout {
            background: #FFF;
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            text-align: center;
            button {
                width: 200px;
                height: 35px;
                background: #e9e9e9;
                border: none;
                border-radius: 10px;
                &:hover {
                    background: #FF6600;
                    color: #FFF;
                }
            }
        }
    }
}
.go-store {
margin: 0 0 50px 0;
text-align: center;
border-top: 1px dotted #e9e9e9;
padding-top: 50px;
box-sizing: border-box;
    button {
        width: 600px;
        height: 300px;
        font-size: 20px;
        padding-bottom: 150px;
        box-sizing: border-box;
        color: #FFF;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; 

        border-radius: 15px;
        border: 1px solid #BABABA;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        
        background-image: url(../images/go_dotori.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        &:hover {
            color: #FF6600;
            background-image: url(../images/go_dotori_hover.jpg);
        }
    }
}
`

// CyworldMiniNav
export const CyworldMiniNav = styled.nav`
display: flex;
flex-direction: column;
position: absolute;
top: 150px;
right: -45px;
.gnb {
    li {
        background: #238DB3;
        width: 90px;
        height: 40px;
        border-radius: 0px 10px 10px 0px;
        border: 1px solid #0C465A;
        border-left: 1px solid #BABABA;
        text-align: center;
        margin-bottom: 5px;
        a {
            display: block;
            line-height: 40px;
            font-size: 17px;
            color: #FFF;
            font-family: 'NeoDunggeunmoPro-Regular';
        }
        &.on {
            background: #FFF;
            border: 1px solid #aaaaaa;
            border-left: 1px solid #FFF;
            a {color: #000;}
            &:hover { background: #FFF; }
        }
        &:hover {
            background: #81cbe7;
        }
    }
}
`

// CyworldHPContainer
export const CyworldHPContainer = styled.div`
display: flex;
margin: auto;
.profile {
    width: 350px;
    height: 700px;
    border-radius: 10px;
    background: #E6E6E6;
    border: 1px solid #a4a4a4;
    border-right: none;
    em {
        display: block;
        text-align: center;
        margin-top: 30px;
        font-size: 12px;
        letter-spacing: 0;
        span { font-family: 'Galmuri7'; color: #FF0000; margin-left: 10px; }
    }
    .pro-inner {
        width: 320px;
        height: 620px;
        border-radius: 10px;
        background: #FFF;
        margin: 10px auto;
        border: 1px solid #BABABA;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        margin-left: 23px;
        padding: 30px;
        box-sizing: border-box;
        .board-menu {
            li {
                font-family: 'NeoDunggeunmoPro-Regular';
                text-indent: 15px;
                font-size: 18px;
                position: relative;
                span {
                    color: #626262;
                    font-family: 'NeoDunggeunmoPro-Regular';
                    cursor: pointer;
                    &.on { font-weight: 700; }
                    &:hover { font-weight: 700; }
                }
                &::before {
                    content: "";
                    display: block;
                    width: 5px; height: 2px;
                    background: #2397C0;
                    position: absolute;
                    top: 50%; left: 0;
                    transform: translateY(-50%);
                    
                }
                &:first-child {
                    text-indent: 0;
                    font-size: 20px;
                    color: #2397C0;
                    padding-bottom: 10px;
                    margin-bottom: 10px;
                    box-sizing: border-box;
                    border-bottom: 1px dotted #BABABA;
                    cursor: auto;
                    &::before { display: none; }
                }
            }
        }
    }
}
.main {
    width: 850px;
    height: 700px;
    border-radius: 10px;
    background: #E6E6E6;
    border: 1px solid #a4a4a4;
    border-left: none;
    .home-title {
        display: flex;
        padding: 0 30px;
        justify-content: space-between;
        align-items: end;
        button {
            width: 40px;
            height: 25px;
            font-size: 15px;
            font-family: 'NeoDunggeunmoPro-Regular';
            border-radius: 3px;
            background: #BABABA;
            color: #FFF;
            border: none;
            letter-spacing: 0;
            margin-right: 10px;
        }
    }
    h2 {
        display: block;
        margin-top: 15px;
        font-size: 22px;
        font-weight: 700;
        color: #113377;
        input {
            width: 500px;
            border: none;
            background: #e6e6e6;
        }
    }
    .main-inner {
        width: 820px;
        height: 620px;
        border-radius: 10px;
        background: #FFF;
        margin: 9px auto;
        border: 1px solid #BABABA;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        margin-right: 23px;
        padding: 15px;
        box-sizing: border-box;
        .content {
            border: 1px solid #E6E6E6;
            overflow: auto;
            max-height: 555px;
            box-sizing: border-box;
            .title {
                display: flex;
                align-items: center;
                height: 50px;
                font-weight: 600;
                background: #ffeee3;
                border-top: 10px solid #E6E6E6;
                border-bottom: 2px dotted #BABABA;
                padding-left: 10px;
                box-sizing: border-box;
                h3 { color: #FF6600; margin-left: 10px; font-family: 'NeoDunggeunmoPro-Regular'; font-size: 22px; }
                svg {
                    font-size: 23px;
                    color: #999;
                }
            }
            // 동훈 시작
            .like {
            background: #fff;
            border: none;
            margin-left: 470px;
            font-size: 25px;
            }
            .file {
                margin-left: 550px;
                background: #FFEEE3;
                border: none;
                i {
                    font-size: 22px;
                }
            }
            input[type=text] {
                margin-top: 15px;
                margin-bottom: 15px;
                width: 681px;
            }
            .reply {
                position: relative;
                p {
                    margin-bottom: 15px;
                }
                button {
                    position: absolute;
                    right: 0;
                }
            }
            // 동훈 끝
        }
        .main-content {
            overflow: auto;
            max-height: 555px;
            padding: 0 10px;
            box-sizing: border-box;
            .mini-title {
                display: block;
                font-weight: 600;
                margin: 0 0 10px; text-indent: 0;
                font-family: 'NeoDunggeunmoPro-Regular';
                letter-spacing: 0;
                font-size: 20px;
                color: #2397C0;
                border-bottom: 1px solid #e9e9e9;
            }
            .room-img {
                background-position: 50% 10%;
                width: 745px; height: 350px;
                box-shadow: 0 0 0 3px #d2d2d2 inset;
                background-repeat: no-repeat;
                background-size: cover;
                margin-bottom: 10px;
            }
        }
    }
}
`

// CyworldInfoContainer
export const CyworldInfoContainer = styled.div`
position: relative;
.today-is {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border: 1px solid #d2d2d2;
    margin-bottom: 10px;
    strong { color: #2397C0; font-size: 20px; font-weight: 600; letter-spacing: 0; font-family: 'NeoDunggeunmoPro-Regular'; margin-right: 10px; }
    svg { color: #FF6600; margin-right: 10px;}
}
.profile-img {
    height: 250px;
    background-repeat: no-repeat;
    background-size: cover;
    &.on {
        background-image: none !important;
    }
}
.upload {
    position: absolute;
    top: 30%; left: 50%;
    transform: translateX(-50%);
}
.comment {
    width: 100%;
    height: 110px;
    word-break: break-all;
    overflow: auto;
    margin-top: 5px;
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 1px dotted #d2d2d2;
    textarea {
        width: 95%;
        height: 85%;
        border: none;
        resize: none;
    }
}
.edit {
    border-bottom: 1px solid #d2d2d2;
    p {
        display: inline;
        cursor: pointer;
        font-family: 'NeoDunggeunmoPro-Regular';
        font-size: 16px;
        letter-spacing: 0;
        span { color: #2397C0; font-size: 10px; margin-right: 5px; }
    }
}
.name {
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-weight: 600;
    font-size: 20px;
    p { font-family: 'NeoDunggeunmoPro-Regular'; color: #113377; }
    svg { color: #FF6600; margin-left: 7px; border: 1px solid #d2d2d2; border-radius: 5px; padding: 1px; box-sizing: border-box; }
    
}
.mail {
    display: inline !important;
    margin: 0 !important;
    font-size: 14px !important;
    color: #FF6600;
}
.surfing {
    margin-top: 10px;
    background: pink;
    select {
        width: 100%;
        height: 35px;
        outline: none;
        background: #95d7ec;
        border: 1px solid #BABABA;
        color: #2397C0;
        option {
            &:first-child { color: #999; }
            &.none { color: #FF6600; }
            span { color: #FF6600; }
        }
    }
}
`

// CyworldHomeNews
export const CyworldHomeNews = styled.div`
display: flex;
.update-news {
    width: 60%;
    p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: relative;
        text-indent: 15px;
        margin-right: 10px;
        span { cursor: pointer; }
        &::before {
            content: "";
            display: block;
            width: 4px; height: 4px;
            background: #d2d2d2;
            position: absolute;
            top: 50%; transform: translateY(-50%);
        }
    }
}
.new {
    .mini-title {
        display: inline;
        margin: 0 !important;
        cursor: pointer;
        svg {
            color: #999;
            vertical-align: middle;
        }
    }
    tr {
        border-bottom: 1px dotted #d2d2d2;
        td {
            width: 150px; height: 40px;
            line-height: 40px;
            text-indent: 10px;
            span { margin-left: 5px; font-size: 14px;
                letter-spacing: 2px;
                color: #113377; cursor: pointer; display: inline; font-weight: 600; }
        }
    }
}
`

// CyworldHomeComment
export const CyworldHomeComment = styled.div`
.comment-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 0 15px;
    background: #f3f3f3;
    border: 1px solid #d2d2d2;
    strong {
        margin: 0; text-indent: 0;
        color: #2397C0;
        font-family: 'NeoDunggeunmoPro-Regular';
        letter-spacing: 0;
        font-size: 18px;
    }
    input {
        width: 550px;
        border: 1px solid #d2d2d2;
        text-indent: 10px;
    }
    button {
        width: 70px;
        background: #FFF;
        border: 1px solid #d2d2d2;
        &:hover { background: #2397C0; color: #FFF; }
    }
}
.ment {
    width: 740px;
    text-indent: 10px;
    display: flex;
    justify-content: space-between;
    margin: 7px auto;
    padding-bottom: 7px;
    border-bottom: 1px dotted #d2d2d2;
    .none {
        margin: auto;
    }
    p {
        position: relative;
        &:first-child {
            width: 620px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            &::before {
            content: "";
            display: block;
            width: 4px; height: 4px;
            background: #d2d2d2;
            position: absolute;
            top: 50%; transform: translateY(-50%);
            }
        }
        &:last-child {
            font-size: 14px;
            color: #FF9900;
            cursor: pointer;
        }
        span {
            color: #113377;
            cursor: pointer;
        }
        svg {
            margin-left: 10px;
        }
    }
}
`

// CyworldJukeboxPg
export const CyworldJukeboxPg = styled.div`
.history {
    p {
        display: flex;
        height: 50px;
        border-bottom: 1px dotted #BABABA;
        align-items: center;
        padding-left: 20px;
        box-sizing: border-box;
        &.on {
            strong { color: #2397C0; }
            background: #dbf2f9;
        }
        &.none {
            height: 100px;
            justify-content: center;
            background: #f4f4f4;
        }
        b {
            color: #999;
        }
        strong {
            margin: 0;
            font-size: 18px;
            color: #292929;
        }
        em {
            margin-left: 20px;
        }
    }
}
`

// CyworldSetting
export const CyworldSetting = styled.div`
p {
    &.none {
        height: 100px;
        line-height: 100px;
        text-align: center;
        background: #f4f4f4;
    }
    &.bgm {
        height: 100px;
        line-height: 100px;
        text-align: center;
        background: #ffb888;
    }
}
strong {
    display: block;
    position: relative;
    text-indent: 15px;
    
    color: #6a6a6a;
    font-weight: 600;
    &::before {
        content: "";
        display: block;
        width: 6px; height: 6px;
        background: #FF6600;
        position: absolute;
        top: 50%; transform: translateY(-50%);
    }
}
.set {
    display: flex;
    justify-content: space-between;
    margin: 20px 25px;
    button { width: 70px; background: #f4f4f4; border: 1px solid #bababa; &:hover { background: #FF6600; color: #FFF; } }
}
.set-home {
    padding: 0 15px;
    justify-content: space-between;
    flex-wrap: wrap;
    display: flex;
    p {
        position: relative;
        margin-bottom: 30px;
        label {
            display: block;
            width: 340px; height: 150px;
            border: 1px solid #e9e9e9;
            border-radius: 25px;
            cursor: pointer;

            background-repeat: no-repeat;
            background-size: 350px;
            background-position: 50% 50%;
            &.skin {
                background-size: 30px;
                background-repeat: repeat;
            }
            &:hover {
                &::after {
                    content: "Click!";
                    display: block;
                    width: 100%; height: 100%;
                    border-radius: 25px;
                    background: #FFF;
                    opacity: 0.8;
                    text-align: center;
                    line-height: 150px;
                    color: #FF6600;
                    font-size: 20px;
                    letter-spacing: 1px;
                }
            }
        }
        input {
            position: absolute;
            top: 10%; left: 5%;
        }
    }
}
`
// 현아 끝




// 영은 시작
// CyworldDiaryPg 
export const CyworldDiaryPg = styled.div`
width: 100%;
overflow: hidden;
position: relative;

.daily-list {
    width: 100%;
    font-size: 18px;
    position: relative;
    .sub-title {
        display: flex; justify-content: space-between; align-items: center;
        width: 100%; height: 60px;
        button {
            height: 30px;
            padding: 0 8px;
            background: #fff;
            border: 1px solid #999; border-radius: 3px;
            margin-right: 2px;
            vertical-align: top;
            text-align: center;
            font-weight: 100;
        }
        .daily-length { 
            margin-left: 8px;
            color: #424242;
            span {color: #FF6600; margin-right:3px}
        }
/*         &.no {
            text-align: center;
            p {
                margin: 80px 0 20px;
                font-size: 20px;
                color: #999;
            }
            a {}
        }
 */    
    }
    .daily-item {
        width: 100%;
        margin-bottom: 50px;
        padding: 25px; 
        box-sizing: border-box;
        border: 1px solid #E6E6E6; border-right: none;
        &:last-child {margin-bottom:0}
        .date { 
            font-family: 'NeoDunggeunmoPro-Regular'; 
            font-size: 19px; 
            font-weight:900; 
            color: #2397C0; 
            letter-spacing:0.1px
        }
        .updTime { 
            font-size:16px; color: #757575;
            span {
                font-size:16px; color: #757575;
            }
        }
        .substance { margin: 25px 0; }
        .isPublic {
            padding: 9px 0;
            border-top: 2px dotted #BABABA;
            border-bottom: 1px dotted #BABABA;
        }
        .btn-line {
            position: relative;
            height: 45px;
            p {
                position: absolute; top: 50%; transform: translateY(-50%);

                &.like-wrap { left:0; }  
                &.upload-wrap { right:0; } 

                button {
                font-size: 18px;
                color: #ff9200;
                background: transparent; border: none;
                vertical-align: top;
                }
                span { font-size: 18px; color: #ff9200; }
                .isLike { /* margin-left:5px;  */ color: #ff9200; }
                .iconify {
                    font-size: 23px; 
                    margin-top:3px; 
                    opacity: 1;
                }
                /* 아이콘2 .isLike { color: lightcoral; font-size:25px; } */
            }
        }

        .diary-comment {
            width: 100%;
            padding: 15px;
            box-sizing: border-box;
            background: #f9f9f9;
            .com-list {
                li {
                    margin-bottom: 3px;
                    p {
                        display: inline;
                        &.com-user { color: #113377} 
                        &.com-date { font-size:14px; color: #999; margin: 0 6px 0 7px;} 
                    }
                    span {
                        button { 
                            background: transparent; border: none; 
                            padding: 0;
                        }
                        .iconify { font-size:22px; margin-right: 2px; vertical-align: top; margin-top: 2.5px;}
                    }
                }
            }
            .com-input {
                display: flex; justify-content: space-between; align-items: center; width: 100%;
                p {}
                input {
                    width: 580px; height: 32px;
                    border: 1px solid #999; border-radius: 3px;
                    text-indent: 10px;
                    box-sizing: border-box;
                }
                button {
                    width: 55px; height: 32px;
                    background: #fff;
                    border: 1px solid #999; border-radius: 3px;
                }
            }
        }
    }
}

.diary-calendar {
    width:99.6%;
    border: 1px solid #ccc;
    border-radius: 10px 10px 0 0 ;
    box-shadow: rgba(0, 0, 0, 0.1) 1.95px 1.95px 1.95px;
    /* 리액트달력 시작 */
    .react-calendar { 
        width:80%;
        margin-left: 20%;
        border: none;
        border-left: 1px dotted #ccc;
        .react-calendar__navigation { /* 날짜이동 영역 */
            width: 150px; height: auto;
            align-items: center;
            margin-bottom: 0;
            margin-left: 10px;
            padding-top: 5px;
            .react-calendar__navigation__label__labelText { /* 날짜이동 text */
                font-family:'NeoDunggeunmoPro-Regular';
                font-size: 18px;
                letter-spacing: 0.2px;
                color: #5c5d5d;                
            }
            .react-calendar__navigation__arrow { /* 날짜이동 버튼 */
                min-width: auto;
                width: 18px;
                height: 18px;
                border: 1px solid #ccc;
                border-radius: 2px;
                box-shadow: rgba(0, 0, 0, 0.2) 1.2px 1.2px 1.2px;                    
                font-size: 20px;
                text-align: center;
                line-height: 18px;
                color: grey;
            }
        }
        /* 하단영역 */
        .react-calendar__viewContainer {                
            .react-calendar__month-view { 
                .react-calendar__month-view__weekdays { opacity: 0; height: 0; } /* 요일 라인 dp:none */
                .react-calendar__month-view__days {  /* day 라인 */
                    display: inline-block !important; 
                    margin-left: 10px;
                    padding-bottom: 5px;
                    /* 공통 */
                    .react-calendar__tile--active ,
                    .react-calendar__tile--now,
                    .react-calendar__tile {
                        width: 30px; height: 27px;
                        margin: 0 !important; padding: 0;
                        line-height: 10px; text-align: center;
                    }
                    .react-calendar__tile--active { /* select-day */
                        border: 3.5px dashed #ff9200; 
                        background: rgba(255, 146, 0, 0.5);
                    }
                    .react-calendar__tile--now { /* select-today */
                        background: skyblue;
                        border: none;
                    }
                    .react-calendar__tile { /* day 타일 */
                        border-radius: 10px;
                        &>* {color: #999; font-family:'NeoDunggeunmoPro-light'; font-size:18px; font-weight:700}
                    }                        
                }
            }
        }
    }
    /* select-date-big */
    .sel-show {
        position: absolute; top:27px; left:30px;
        p {
            font-family:'NeoDunggeunmoPro-Regular'; 
            text-align: center;
            font-size: 26px;
            color: #999;
            &:first-child {
                font-size: 40px;
                font-weight: 900;
                color: #2397C0;
                line-height: 0.6;
            }            
        }
    }
}

// CyworldDiaryAddPg
.daily-add {
    position: relative;
    width: 100%;
    border-top: 1px dotted #BABABA;
    margin-top: 57px;
    padding: 20px;
    /* 버튼 공통 */
    button, select {
        height: 28px;
        background: #fff;
        border: 1px solid #999; border-radius: 3px;
        margin-right: 2px;
        vertical-align: top;
        text-align: center;
        font-weight: 100;
    }
    .top-box {
        .attach-line {
            button { margin-right: 5px; }
            .icon { margin-right:4px }
        }
        .style-line {
            width: 100%;
            margin-top: 6px;
            margin-bottom: 18px;
            span {
                margin-right: 7px;
                select {margin-right: 5px; &:last-child{margin-right:3px}}
                button { width: 28px; }
                i { font-size: 18px; text-indent: -1.5px; }
            }
        }
    }
    textarea {
        width: 710px; 
        padding: 20px;
        box-sizing: border-box;
        font-size: 18px;
        border: 1px solid #bababa;
        box-shadow: rgba(0, 0, 0, 0.1) 1.95px 1.95px 2.6px;
    }
    .btn-wrap { 
        display: flex; margin-top: 10px; margin-left: 567px;
        button {
            display: flex; align-items: center; justify-content: center;
            width: 68px; height: 32px;
            &:last-child {margin-left: 5px}
        }
    }
}
`
// 영은 끝





// 초롱 시작
export const CyworldProfilePg = styled.div`
background: #EDEDED;
.profile-con {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    .imgBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
        /* margin-left: 10px; */
        img {
            width: 350px;
            height: 350px;
            padding-left: 15px;
            padding-bottom: 15px;
         }
    }
    .info-text {
        margin-top: 10px;
        text-align: right;
        p {
            /* margin-bottom: 10px; */
            label {
                margin-right: 25px;
            }
            input {
                width: 250px !important;
                /* width: 250px;  */
                text-indent: 10px;
                margin-right: 25px;
            }
        }
        button {
            /* margin-top: 30px; */
            margin-right: 45px;
            margin-bottom: 40px;
            width: 70px;
            &:hover {
                    color: #fff;
                    background: #2397C0;
                }
    }
  }
}
`
export const CyworldGuestPg = styled.div`
   .GuestText{
       p {
        /* margin-top: 10px; */
        margin-bottom: 10px;
        margin-left: 15px;
        }
       .GuestWrit{
           display: inline-block;
           padding: 10px 10px;
           border-bottom: dashed 1px #BABABA;
           padding-bottom: 20px;
           img {
            width: 200px;
            height: 200px;
            border-radius: 10%;
            border: 1px solid #BABABA;
            margin-right:10px
         }
         textarea{
            display:inline-block;
            border-radius: 10px;
            width: 500px;
            height: 190px;
            margin: 0 auto;
            padding-top: 10px;
            vertical-align: auto;
            &::placeholder {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            }
         }
         button {
            width: 70px;
            margin-top: 10px;
             &:hover {
                 color: #fff;
                 background: #2397C0;
     }
        }
        }
       .Guestbox{
           display: flex;
           padding: 10px 10px;
           padding-bottom: 50px;
           img {
            width: 200px;
            height: 200px;
            border-radius: 10%;
            border: 1px solid #BABABA;
            margin-right:10px
         }
         span{
            border: 1px solid #BABABA;
                border-radius: 10px;
                 width: 500px;
                 height: 200px;
                 margin: 0 auto;
             p{
                 text-align: center;
                 margin: 0 auto;
                 padding-top: 30px;
             }
         }
       }
            button {
                display: flex;
                width: 100px;
                padding-left: 19px;
                margin-top: 10px;
                margin-left: 600px;
                &:hover {
                    color: #fff;
                    background: #2397C0;
        }
            }
        }
`
export const CyworldGuestWr = styled.div`
.GuestText_Wr{
       p {
        /* margin-top: 20px; */
        margin-bottom: 10px;
        margin-left: 15px;
        }
       .GuestWrit_Wr{
           display: inline-block;
           /* align-items: center; 요소들을 수직 가운데 정렬 */
           padding: 10px 10px;
           border-bottom: dashed 1px #BABABA;
           padding-bottom: 20px;
           img {
            width: 200px;
            height: 200px;
            border-radius: 10%;
            border: 1px solid #BABABA;
            margin-right:10px
         }
         textarea{
            /* display:inline-block; */
            border-radius: 10px;
            width: 500px;
            height: 190px;
            margin: 0 auto;
            padding-top: 10px;
            vertical-align: auto;
            &::placeholder {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            }
         }
         button {
            width: 70px;
            margin-top: 20px;
            /* align-self: flex-end; */
             &:hover {
                 color: #fff;
                 background: #2397C0;
     }
        }
        }
       .Guestbox_Wr{
           display: flex;
           padding: 10px 10px;
           padding-bottom: 60px;
           img {
            width: 200px;
            height: 200px;
            border-radius: 10%;
            border: 1px solid #BABABA;
            margin-right:10px
         }
         textarea{
            width: 506px; height: 200px;
            border-radius: 10px;
            vertical-align: auto;
            &::placeholder {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            }
         }
             p{
                 text-align: center;
                 margin: 0 auto;
                 padding-top: 30px;
             }
         }
       }
            button {
                display: flex;
                width: 70px;
                padding-left: 19px;
                margin-top: -35px;
                margin-left: 600px;
                &:hover {
                    color: #fff;
                    background: #2397C0;
        }
            }
`
//BgmStore
export const CyworldBgmWr = styled.div`
    width: 100%;
    .inner {
        width: 1400px; margin: auto;
        padding-top: 100px;
        padding-bottom: 100px;
        // 공통
        .sub-title {
            position: relative;
            height: 90px;
            h3 { position: absolute; top: 50%; left: 0; transform: translateY(-50%); font-size: 35px; }
            p { position: absolute; top: 50%; right: 0; transform: translateY(-50%); display: flex; align-items: center;
                span {
                    font-size: 15px;
                    &:last-child {width: 220px; height: 2px; background: orangered; margin-left: 10px;}
                }
            }
        }
        .swiper-slide {
            display: flex; flex-direction: column;
            padding-bottom: 50px;
            img { width: 100%; height: 185px; margin-bottom: 10px; }
            strong { font-size: 16px; }
            p { font-size: 15px; }
            .i { position: absolute; top: 120px; right: 20px; color: rgba(255, 255, 255, 0.8); }
        }
        // 영역별 start
        .new-music {
            padding-bottom: 40px;
            .new-list {
                .new-item {
                    margin-bottom: 40px;
                    // width: 210px;
                    img { width: 210px }
                }
            }
        }
    }
`
export const MusicModalWr = styled.div`
&.MusicModa {
    .ModalBg { z-index: 4; position: fixed; width: 100%; height: 100%; left: 0; top: 0; background-color: #000; opacity: 0.7;}
    .ModalPopup { z-index: 5; position: fixed; width: 600px; height: 600px; left: 50%; top: 50%; background-color: #fff; transform: translate(-50%, -50%); padding: 20px;
        h2 { font-size: 25px; }
        div { width: 100%; height: 450px; overflow: hidden;}
        iframe { width: 100%; height: 450px;}
        p { font-size: 25px; margin-top: 10px;}
        span {position: absolute; right: 20px; top: 20px;
            i {font-size: 35px;}
        }
    }
}
`
export const MusicBoxContainer= styled.div `
    width: 1400px;
    margin: auto;
    h1{padding: -20px 0px; font-size: 35px;
       span{
        color: tomato;
       }
    }
    h2 {
        padding: 40px 0; font-size: 30px;
        font-weight: 600;
        text-align: center;
        span{
            color: tomato;
        }
    }
    h3 {
        padding: 30px 30px; font-size: 20px;
        font-weight: 600;
        display: inline-block;
    }
    h4 {  padding-left:70px; font-size: 20px;
        font-weight: 600;
        display: inline-block;}
    .BasketMessage {
      h2{
        padding: 10px 0;
        font-size: 20px;
        /* color:#fff; */
    }
    }    
    .BasketEmpty {
      h2{
        padding: 70px 0;
        font-size: 20px;
        /* color:#fff; */
    }
    }    

    .searchText {
        input{
            width:442px; height:45px; border-radius:15px;
            margin-bottom:30px;
            position: relative; left: 930px;
            text-indent: 20px;
            border: 4px solid #FF6600;
        }
        button {background:none; border:none; position:relative; left:875px; top:7px; }
    .basket {
        position: relative;
        h5 {
                position:fixed;
                bottom:185px;
                right: 94px;
                font-size: 22px;
            }
        button{
            img {
                width: 159px; height: 150px;
                position:fixed;
                bottom: 40px;
                right: 98px;
            }
        }
    }
    .basketList {
        z-index: 3;
        position:fixed;
        bottom: 220px;
        right: 78px;
        width: 570px; height: 600px;
        border: 1px solid #FF6600;
        background: #FF6600;
        /* border-radius: 15px; */
        overflow-y: scroll;
        table {
    width: 90%;
    margin: 0 auto;
    .w8 {width:10%}
    .w9 {width:20%}
    .w10 {width:15%}
    .w11 {width:10%}
    tr:last-child td {border-bottom:1px solid #000}
        th , td { border-bottom: 1px solid #DCDCDC; vertical-align: middle; text-align: center; }
        th { border-top: 1px solid #000 ; height:50px }
        td { padding:5px ;
    }
 }
}
}
`
export const MusicBoxListContainer= styled.div `
&.MusicBoxList {
    table {width:100% ;
        /* .w0{ width: 7% } */
        .w1{ width: 7% }
        .w2{}
        .w3{ width:22% }
        .w4{ width:15% }
        .w5{ width:10% }
        .w6{ width:10% }
        .w7{ width:10% }
        tr:last-child td {border-bottom:1px solid #000}
        th , td { border-bottom: 1px solid #DCDCDC; vertical-align: middle; text-align: center; }
        th { border-top: 1px solid #000 ; height:50px }
        td { padding:5px ;
            &:nth-child(2) {text-align: left;}
            &:nth-child(3) {text-align: center;}
            /* &:nth-child(5) {text-align: left; padding-left:10px;} */
            img {margin-right:76px; vertical-align: middle;}
            i {font-size: 20px; vertical-align: middle; cursor: pointer;}
            &.like i {margin-right: 5px;}
            &.img  {display: flex}
            &.img p {padding-top: 5px;}
            &.img p span{display: block;; color:#000}
            button {border:none; background:none; text-indent:5px;
            position:relative; top:4px}
            input { width:18px; height:18px;}
        }
    }
}
`
export const MusicBoxFormContainer= styled.form `
&.MusicBoxForm {padding-bottom:20px; margin-bottom: 20px; text-align: center;
    input { width: 50%; height: 50px;  border: 1px solid #DCDCDC; padding:3px 25px}
}
`
export const MusicBoxModalBox= styled.div `
&.Modal {
    .bg { position: fixed; width: 100%; height: 100%; left: 0; top: 0; background-color: #000; opacity: 0.7;}
    .popup { position: fixed; width: 600px; height: 600px; left: 50%; top: 50%; background-color: #fff; transform: translate(-50%, -50%); padding: 20px;
        h2 { font-size: 25px; }
        div { width: 100%; height: 450px; overflow: hidden;}
        iframe { width: 100%; height: 450px;}
        p { font-size: 25px; margin-top: 10px;}
        span {position: absolute; right: 20px; top: 20px;
            i {font-size: 35px;}
        }
    }
}
`
// 초롱 끝