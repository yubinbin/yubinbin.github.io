``` js

/**
* 添加标签
*/
function newTag(targePosition, targetId) {
    let world_vector = new THREE.Vector3(targePosition.x, targePosition.y, targePosition.z);

    // Vector3.project ( camera : Camera ) : this
    // camera — 在投影中使用的摄像机。
    // 将此向量(坐标)从世界空间投影到相机的标准化设备坐标 (NDC) 空间。

    let vector = world_vector.project(camera);
    let halfWidth = window.innerWidth / 2,
    halfHeight = window.innerHeight / 2;
    var x = Math.round(vector.x * halfWidth + halfWidth);
    var y = Math.round(-vector.y * halfHeight + halfHeight);

    /**
    * 更新立方体元素位置
    */
    var div = document.getElementById(targetId)
    div.style.left = x + 'px';
    div.style.top = y + 'px';


    let tempV = vector;
    if ( (Math.abs(tempV.x) > 1) || (Math.abs(tempV.y) > 1) || (Math.abs(tempV.z) > 1) ) {
        // 在视野外了
        div.style.display='none'
    } else {
        // 在视野内
        div.style.display='block'
    }
}


```