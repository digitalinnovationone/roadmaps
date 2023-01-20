var Quiz = function(){
  var self = this;
  
  this.init = function(){
    self._bindEvents();
  }
  
  // this.correctAnswers = [
  //   { question: 1, answer: 'a' },
  //   { question: 2, answer: 'b' },
  //   { question: 3, answer: 'd' },
  //   { question: 4, answer: 'c' },
  //   { question: 5, answer: 'd' },
  //   { question: 6, answer: 'b' },
  // ]
  
  this._pickAnswer = function($answer, $answers){
    $answers.find('.quiz-answer').removeClass('active');
    $answer.addClass('active');
  }

  this._calcResult = function(){

    var numberOfCorrectAnswers = 0;

    $('ul[data-quiz-question]').each(function(i){
      var $this = $(this),
          chosenAnswer = $this.find('.quiz-answer.active').data('quiz-answer'),
          correctAnswer;
      
      for ( var j = 0; j < self.correctAnswers.length; j++ ) {
        var a = self.correctAnswers[j];
        if ( a.question == $this.data('quiz-question') ) {
          correctAnswer = a.answer;
        }
      }
      
      if ( chosenAnswer == correctAnswer ) {
        numberOfCorrectAnswers++;
        
        // highlight this as correct answer
        $this.find('.quiz-answer.active').addClass('correct');
      }
      else {
        $this.find('.quiz-answer[data-quiz-answer="'+correctAnswer+'"]').addClass('correct');
        $this.find('.quiz-answer.active').addClass('incorrect');
      }
    });

    if ( numberOfCorrectAnswers < 3 ) {
      return {code: 'bad', text: 'Poor spelling skills'};
    }
    else if ( numberOfCorrectAnswers == 3 || numberOfCorrectAnswers == 4 ) {
      return {code: 'mid', text: 'Moderate spelling skills'};
    }
    else if ( numberOfCorrectAnswers > 4 ) {
      return {code: 'good', text: 'Good spelling skills'};
    }
  }

  this._isComplete = function(){
    var answersComplete = 0;

    $('ul[data-quiz-question]').each(function(){
      if ( $(this).find('.quiz-answer.active').length ) {
        answersComplete++;
      }
    });
    if ( answersComplete >= 15 ) {
      return true;
    }
    else {
      return false;
    }
  }

  this._showResult = function(result){
    $('.quiz-result').addClass(result.code).html(result.text);
  }
  
  this._bindEvents = function(){
    $('.quiz-answer').on('click', function(){
      var $this = $(this),
          $answers = $this.closest('ul[data-quiz-question]');
      self._pickAnswer($this, $answers);

      if ( self._isComplete() ) {
        
        // scroll to answer section
        // $('html, body').animate({
        //   scrollTop: $('.quiz-result').offset().top
        // });
        
        self._showResult( self._calcResult() );
        $('.quiz-answer').off('click');
        
      }
    });
  }
}
var quiz = new Quiz();
quiz.init();