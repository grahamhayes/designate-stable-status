for (var i = commits.length - 1; i >= 0; i--) {
  $('#commit_container').append(make_commit_block(commits[i]));
};

for (var i = bugs.length - 1; i >= 0; i--) {
  $('#bug_container').append(make_bug_block(bugs[i]))
};

function make_commit_block(commit){
  return '<div class="panel panel-default">' +
'      <div class="panel-heading">'+ commit.subject +'<div style="float:right;"><a href="https://github.com/openstack/designate/commit/'+commit.sha+'"><code>'+ commit.sha +'</code></a>    <a role="button" data-toggle="collapse" href="#commit_'+commit.sha+'" aria-expanded="false" aria-controls="commit_'+commit.sha+'">Details</a></div></div>' +
'      <div class="panel-body collapse" id="commit_'+commit.sha+'">' +
make_commit_body(commit) +
'      </div>' +
'    </div>';
}

function make_commit_body(commit){

  commit_row = ''

  for (var i = commit.files.length - 1; i >= 0; i--) {
    commit_row = commit_row + make_commit_file_row(commit.files[i])
  };

   
  return '<div class="well"><strong>Author:</strong> '+ commit.name +' &lt;' + commit.email + '&gt;</div>'+
    '<table class="table table-striped">' + 
    '<thead><tr><th>File</th><th>Changes</th></tr></thead>' + 
    '<tbody>' + 
    commit_row
    '</tbody>' +
  '</table>'
}

function make_commit_file_row(file){
  return '<tr><td><small>' + file.path+ '</small></td><td><p class="text-success" style="display:inline">+'+file.ins+'</p>/<p class="text-danger" style="display:inline">-'+file.del+'</p></td></tr>'
}


function make_bug_block(bug){
  return '<div class="panel panel-default">' + 
            '<div class="panel-heading">'+bug.title+' '+make_bug_tags(bug)+'<div style="float:right"> <a href="'+bug.web_link+'">#'+bug.id+'</a>   <a role="button" data-toggle="collapse" href="#bug_'+bug.id+'" aria-expanded="false" aria-controls="bug_'+bug.id+'">Details</a></div></div>' +
            '<div class="panel-body collapse" id="bug_'+bug.id+'"><h6>Description:</h6><small>' +
            bug.description
            '<small/></div>' +
            '<div class="panel-footer"><strong>Reporter: </strong>'+bug.owner+'</div>' +
          '</div>';
}

function make_bug_tags(bug){
  bug_tags = ''
  for (var i = bug.tags.length - 1; i >= 0; i--) {
    bug_tags = bug_tags + '<span class="label label-primary">'+bug.tags[i]+'</span>  '
  };
  return bug_tags
}