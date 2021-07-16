function discountCalculatore(senior: boolean, vetOrResponder: boolean, clubMember: boolean): number {
//1st if all are true
if (senior && vetOrResponder && clubMember) return 0.25

// if only 2 is true
if((clubMember && vetOrResponder) || (senior && clubMember)) return 0.15

//this will happen if customer is senior AND vetRes
if(senior && vetOrResponder) return 0.2

//if the client is any of the 3 is tru
if(senior || vetOrResponder || clubMember) return 0.1

//if all three are false
return 0
}

//in order to run it

console.log(
    discountCalculatore(true, true, true),
    discountCalculatore(false, false, false),
    discountCalculatore(true, false, false),
    discountCalculatore(true, true, false)
)