window.addEventListener('load', function() {
<<<<<<< HEAD
  var text = document.getElementById('insert-posts');
  var buttonTweet = document.getElementById('button');
  var list = document.getElementById('container-posts');
  var boxRight = document.getElementById('box-right');

  buttonTweet.addEventListener('click', function(event) {
    if (text.value) {
      buttonTweet.setAttribute('class', 'active');
      var li = document.createElement('li');
      var post = document.createElement('p');

      post.textContent = text.value;
      post.setAttribute('class', 'post');
      li.appendChild(post);
      list.appendChild(li);
      text.value = '';
    }
  })
  /*boxRight.addEventListener('keydown', autosize);*/
});
=======
  var tweetarea = document.getElementById('tweetarea');
  var buttonTweet = document.getElementById('button');
  var countDinamic = document.getElementById('count');
  var massage = document.getElementById('message');
  var MAXCHARACTER = 140;

  tweetarea.addEventListener("keyup",function(event){
    if (event.target.value.trin().length); {
    var total = MAXCHARACTER - event.target.value.trin().length;
      tweetarea.disable = false;
      console.log(event.target.value.trin());
    } else {
      tweetarea.diasble = true;
      countDinamic.textContent = MAXCHARACTER;
      console.log("Caja vacía");
    }
console.log(event.target.value.trin());
console.log(target.value.trin().length);
    }
});

buttonTweet
>>>>>>> e0dcddac48e27315329b76f3a1d8ce25d0efaeae
