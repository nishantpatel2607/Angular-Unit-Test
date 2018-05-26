import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  
  let component: VoteComponent;

  //before each test jasmin will run following function 
  beforeEach( ()=>{
    component  = new VoteComponent();
  });

  afterEach(()=>{}); //use to clean up after each test, write a clean up code in it

  beforeAll(()=>{});

  afterAll(() => {});

  it('should increment totVotes when upvoted', () => {
    
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totVotes when downvoted', () => {
    
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});