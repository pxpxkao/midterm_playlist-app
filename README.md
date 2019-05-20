# Music Playlist App
### Two Applications
* **PlayList App**：Manage users' Music Playlist by adding and deleting items
* **Lyrics Blog**：Provide a Lyrics Blog to help user manage their lyrics database

## Quick Start
### Installation
```python
git clone https://github.com/pxpxkao/midterm_playlist-app.git

cd midterm_playlist-app

# Install dependencies for server
npm install  

# Install dependencies for client
npm run client-install  
```
### Run Application
```python
# Run the client & server with concurrently -> use this command
npm run dev

# Run the server side only
npm run server

# Run the client side only
npm run client

### Server on http://localhost:7000
### Client on http://localhost:3000
```

## Development

Client-side programs in React.js
Server-side programs in Express (Node.js)
Database in Mongodb

## How to Use
### Homepage
![](https://i.imgur.com/YEYXfFV.jpg)

#### Register or Login first
If you don't want to register, please login with
```
Email: guest@gmail.com
Password: guest
```
![https://i.imgur.com/EYPSsKG.gif](https://i.imgur.com/EYPSsKG.gif)

If you don't login, you won't have the authority to add or delete items


### Blog
#### Add Post by Clicking the "+" Button
#### Delete Post by Clicking the "x" Button
![](https://i.imgur.com/CBb6Fum.gif)
[https://i.imgur.com/CBb6Fum.gif](https://i.imgur.com/CBb6Fum.gif)-> this link is available, but the content is too big to display

### App
#### Add Playlist / Songs
#### Delete Playlist / Song
![https://i.imgur.com/jpnsXxw.gif](https://i.imgur.com/jpnsXxw.gif)

## References
**Whole Framework**
*    Based on **bradtraversy's MERN Shopping List tutorial**
[Github Link](https://github.com/bradtraversy/mern_shopping_list)
[YouTube Tutorial](https://www.youtube.com/watch?v=PBTYxXADG_k&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE&index=1)

**Background** from [Pexels](https://www.pexels.com/photo/architecture-background-buildings-business-218983/)

**Icons** from [react-icons](https://react-icons.netlify.com/#/)

### Some Dependencies References
**Reactstrap**
[https://reactstrap.github.io/](https://reactstrap.github.io/)

**Redux**
some introductions and tutorials
[https://ithelp.ithome.com.tw/articles/10187498](https://ithelp.ithome.com.tw/articles/10187498)
[https://chentsulin.github.io/redux/docs/basics/UsageWithReact.html](https://chentsulin.github.io/redux/docs/basics/UsageWithReact.html)

**axios**
[https://github.com/axios/axios](https://github.com/axios/axios)


## My Contribution
### 利用 react-router 增加 HomePage 與 Lyrics Blog 的功能
利用Practice06所做的static blog架構，改成與database連結，可直接從database拿取與更改存好的post

要能增加與刪除post也必須要先登入才有權限修改
```javascript
const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    lyrics: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
```

### 增加了nested object (playlist)
原本只有 getLists, addList, deleteList的功能

增加了 addSongs, deleteSong：
不只能刪除一個playlist，也能夠直接刪除playlist裡存的歌
```javascript
const ListSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    songs: {
        type: Array,
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    }
});
```

## 心得
這次的Midterm Project要試著將後端與前端連起來，一開始不知道怎麼下手時，查了很多網站教學，有很多入門都是教chatbot, login/logout, todolist等等的功能，最後在youtube發現了Traversy Media的MERN(Mongoose, Express, React, Node)Shopping List教學影片，覺得一步步跟著他學會比較快理解整個架構要怎麼從最一開始建起來，所以選擇了這個shopping list的架構作為入門。

這位作者從npm init，裝express, react，到怎麼先將後端建起來，再到刻前端，然後利用redux建middleware，最後把後端跟前端連在一起。

我覺得透過這樣的方式，有更加理解怎麼從頭開始，寫出一個完整的web application，尤其是增加了Redux(可全域管理State的物件)以及axios(一個以 Promise based，用於瀏覽器及 node.js 的HTTP Client)這些上課沒有教的套件，學習到了應用方式也覺得蠻好理解的！

## Future Works
### User can：
* **Have their own database** (現在還是共享的)
* **Edit playlist items and posts**
* **Add youtube link or upload audio and video**
