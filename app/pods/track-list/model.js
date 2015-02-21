import DS from 'ember-data';

let TrackList = DS.Model.extend({
  title: DS.attr('My title')
});

export default TrackList;

TrackList.reopenClass({
  FIXTURES: [
    {id:'1', title: 'My first tracklits'},
    {id:'2', title: 'Tracklits'},
    {id:'3', title: 'Bla Bla'}
  ]
});