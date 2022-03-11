//https://teachablemachine.withgoogle.com/models/p_Yd9SJek/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/p_Yd9SJek/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}