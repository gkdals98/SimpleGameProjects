class DeepCopyTool{
  constructor(){
  }
}

DeepCopyTool.prototype.deep_copy = function(obj){
    var clone = {};
    for(var i in obj) {
        if(typeof(obj[i])=="object" && obj[i] != null)
            clone[i] = this.deep_copy(obj[i]);
        else
            clone[i] = obj[i];
    }
    return clone;
}

export let deep_copy_tool = new DeepCopyTool();
