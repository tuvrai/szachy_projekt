document.addEventListener('DOMContentLoaded',drawBoard);

function fillSquare(x,y,color = 'rgb(91, 171, 113)')
{
  const boardlayer = document.getElementById('boardlayer');
  if (boardlayer.getContext)
  {
    const ctxB = boardlayer.getContext('2d');
    ctxB.fillStyle = color;
    ctxB.fillRect(x*80,y*80,80,80);
  }
}

function drawBoard()
{
    let count = 1;
    let currentwhite = true;
    let lane = 8;
    for (let y = 0; y<8; y+=1)
    {
      if (lane%2==0) currentwhite = true;
      else currentwhite = false;
      for (let x = 0; x<8; x+=1)
      {
        if (currentwhite)
        {
          currentwhite = false;
        }
        else
        {
          fillSquare(x,y,'rgb(0,0,0)')
          currentwhite = true;
        }
      }
      lane = lane-1;
    }
  drawFigure(3,1);
}

function drawKnight(x,y)
{
  const figurelayer = document.getElementById('figurelayer');
  const ctxF = figurelayer.getContext('2d');
  ctxF.clearRect(0,0,640,640);
  const img = new Image();
  img.onload = function()
  {
    ctxF.drawImage(img,x,y,60,60);
  }
  img.src = 'knight.png';
}

function drawFigure(horizontal,vertical)
{
  const x = 80*horizontal+10;
  const y = 80*vertical+10;
  drawKnight(x,y);
}

function draw()
{

}

async function animate()
{
  x = [3,5,3,2,4,5,7];
  y = [1,2,3,5,6,4,5];
  for (i=0;i<7;i++)
  {
    drawFigure(x[i],y[i]);
    fillSquare(x[i],y[i]);
    await new Promise(r => setTimeout(r, 500));
  }
}

document.addEventListener('click',animate);
