//获取当前设备屏幕宽度
documentWidth = window.screen.availWidth;
//整个大正方形块边长
gridContainerWidth = 0.92 * documentWidth;
//小正方形的边长
cellSideLength = 0.18 * documentWidth;
//每一个小方块的间距
cellSpace = 0.04 * documentWidth;

function getPosTop(i,j){
    return cellSpace + i * (cellSpace+cellSideLength);
}

function getPosLeft(i,j){
    return cellSpace + j * (cellSpace+cellSideLength);
}

function getNumberBackgroundColor( number ){
    switch( number ){
        case 2:return "url(http://wx2.sinaimg.cn/mw690/6aec02c5ly1fge33tyrmwj202s02sq3j.jpg)";break;
        case 4:return "url(http://wx1.sinaimg.cn/mw690/6aec02c5ly1fge33ugcjtj202s02swez.jpg)";break;
        case 8:return "url(http://wx1.sinaimg.cn/mw690/6aec02c5ly1fge33uwpnjj202s02saak.jpg)";break;
        case 16:return "url(http://wx1.sinaimg.cn/mw690/6aec02c5ly1fge33vf6frj202s02s0t8.jpg)";break;
        case 32:return "url(http://wx2.sinaimg.cn/mw690/6aec02c5ly1fge33wiipkj202s02sjrx.jpg)";break;
        case 64:return "url(http://wx1.sinaimg.cn/mw690/6aec02c5ly1fge33wy85lj202s02sdgc.jpg)";break;
        case 128:return "url(http://wx3.sinaimg.cn/mw690/6aec02c5ly1fge33xluzdj202s02swf0.jpg)";break;
        case 256:return "url(http://wx1.sinaimg.cn/mw690/6aec02c5ly1fge33y1iajj202s02sq3i.jpg)";break;
        case 512:return "url(http://wx1.sinaimg.cn/mw690/6aec02c5ly1fge33yqe4xj202s02sgm6.jpg)";break;
        case 1024:return "url(url(http://wx2.sinaimg.cn/mw690/6aec02c5ly1fge33z5cdaj202s02sgm3.jpg)";break;
        case 2048:return "url(http://wx1.sinaimg.cn/mw690/6aec02c5ly1fge33zozcnj202s02sgm1.jpg)";break;
    }
}

function getNumberColor( number ){
    if( number <= 4 ){
        return "#776e65";
    }

    return "white";
}

function noSpace( board ){
    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 4; j++){
            if(board[i][j] == 0){
                return false;
            }
        }
    }
    return true;
}

function canMoveLeft( board ){
    for(var i = 0; i < 4; i++){
        for(var j = 1; j < 4; j++){
            if( board[i][j] != 0){
                if( board[i][j-1]==0 || board[i][j-1]==board[i][j] ){
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveUp( board ){
    for(var i = 1; i < 4; i++){
        for(var j = 0; j < 4; j++){
            if( board[i][j] != 0){
                if( board[i-1][j]==0 || board[i-1][j]==board[i][j] ){
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveRight( board ){
    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 3; j++){
            if( board[i][j] != 0){
                if( board[i][j+1]==0 || board[i][j+1]==board[i][j] ){
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveDown( board ){
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 4; j++){
            if( board[i][j] != 0){
                if( board[i+1][j]==0 || board[i+1][j]==board[i][j] ){
                    return true;
                }
            }
        }
    }
    return false;
}

function noBlockx(row,col1,col2,board){
    for(var i = col1 + 1; i < col2; i++){
        if( board[row][i] != 0 ){
            return false;
        }
    }
    return true;
}

function noBlocky(col,row1,row2,board){
    for(var i = row1 + 1; i < row2; i++){
        if( board[i][col] != 0 ){
            return false;
        }
    }
    return true;
}

//图片自适应div
