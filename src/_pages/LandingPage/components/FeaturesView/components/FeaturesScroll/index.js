import React, {forwardRef} from "react";
import styles from './styles.module.css';
import FeatureCard from "./components/FeatureCard";

const FeaturesScroll = forwardRef((props,ref) => {
    const card_content = [
        {
            title: 'Simple, easy to use',
            desc: 'Cafe is dynamically typed',
            code: `var i= 10;
cmd.println(i);`
        },
        {
            title: 'Class Free',
            desc: 'Cafe has only one construct: Object!',
            code: `var obj = {};
cmd.print(obj);`
        },
        {
            title: 'Behavior Delegation',
            desc: 'Cafe links one Object to another Object to delegate properties',
            code: `var parent= {age:45};
var child = Object.delegate(parent);
child.age = 18;
cmd.println(child.age);`
        },
        {
            title: 'Modular Programming',
            desc: 'Cafe files act as modules',
            code: `import a from ‘./café_file’;
a();
#cafe_file.cafe
export func a(){
cmd.println(“I’m in café_file”);
}`
        },
        {
            title: 'Functional Programming',
            desc: 'Supports HoF, Closure & Anonymous function',
            code: `Func a(b){
b();
}
a(func() {
cmd.print(“Hey, there!”);
});`
        },
        {
            title: 'Flexible DS',
            desc: 'Dynamic Lists to store any type of Objects',
            code: `var list = [10, 20, 30];
list[0:1] = [20];
var sub = list[1:2];
list.add();
list.remove();
cmd.print(sub);`
        }
    ]

    const featureCards = [];

    card_content.forEach(function (item) {
        featureCards.push(
            <FeatureCard content={item} key={item.title + item.desc}/>
        )
    });

    return (
        <div ref={ref} className={styles.Container}>
            <div className={styles.FakeCard} style={{paddingRight: props.fakeCardWidth}}></div>
            {featureCards}
            <div className={styles.FakeCard} style={{paddingRight: props.fakeCardWidth}}></div>
        </div>
    );
});

export default FeaturesScroll;