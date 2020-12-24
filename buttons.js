for(let i = 1;i < 17;i++){
  let block = document.createElement("div");
  let img = document.createElement('img');
  img.src = `images/${i}.PNG`;
  let ids = i;
  block.setAttribute('id', ids);
  img.setAttribute('id','element' + i);
  block.appendChild(img);
  document.getElementById('grids').appendChild(block);
}
for(let i = 17;i < 20;i++){
    let block = document.createElement("div");
    let img = document.createElement('img');
    img.src = `images/${i}.PNG`;
    let ids = i;
    block.setAttribute('id',ids);
    img.setAttribute('id','element' + i);
    block.appendChild(img);
    document.getElementById('grids2').appendChild(block);
}