const menuData = [
    {id: 1, menu: '홈', link: '', on: true},
    {id: 2, menu: '프로필', link: 'profile', on: false},
    {id: 3, menu: '다이어리', link: 'diary', on: false},
    {id: 4, menu: '사진첩', link: 'gallery', on: false},
    {id: 5, menu: '방명록', link: 'guest_book', on: false},
    {id: 6, menu: '쥬크박스', link: 'jukebox', on: false},
    {id: 7, menu: '설정', link: 'manager', on: false}
];

const setData = [
    {id: 1, menu: '미니룸 설정', on: true},
    {id: 2, menu: '스킨 설정', on: false},
    {id: 3, menu: '미니미 설정', on: false},
    {id: 4, menu: '배경음악 설정', on: false}
];

const userList = [
    {id: 1, name: '조현아', email: 'zoa12@naver.com', emailID: 'zoa12', emailDomain: 'naver.com', pw: '1002', pwChk: '1002', gender: 'female', birth: '1996-10-02'},
    {id: 2, name: '이초롱', email: 'chfhdvlcl@naver.com', emailID: 'chfhdvlcl', emailDomain: 'naver.com', pw: '0421', pwChk: '0421', gender: 'female', birth: '1994-04-21'},
    {id: 3, name: '김영은', email: 'ye_1223@naver.com', emailID: 'ye_1223', emailDomain: 'naver.com', pw: '1223', pwChk: '1223', gender: 'female', birth: '1998-12-23'},
    {id: 4, name: '우동훈', email: 'wosm5798@naver.com', emailID: 'wosm5798', emailDomain: 'naver.com', pw: '0105', pwChk: '0105', gender: 'male', birth: '1997-01-05'},
    {id: 5, name: '변서은', email: 'hotpink@naver.com', emailID: 'hotpink', emailDomain: 'naver.com', pw: '0303', pwChk: '0303', gender: 'female', birth: '2023-03-03'}
];

export { menuData, setData, userList };