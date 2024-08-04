state variable:
		const [state,setState] = useState([] -> initial state value);
      - whenever my state variable changes react rerender/ refresh  my component.
      - suppose when i click button as soon as i change my state variable react auttomatically refresh my fast automatically.
      - It keeps your data layer and sync with the UI layer		

useEffect();
		useEffect(()=> {
  			console.log('useEffect called');
		},[])
		- if you have to do something after rendering a compponent 
		-the first argument is the callback fn()
		-second is the dependency array


two types of routing in webApps
	-client side
	-server side 


	SINGLE RESPONSIBILITY PRINCIPLE

	-suppose if you have a function or if you have a class it you have any single identity of your code that should have single responsibility right
	
	-let's take i have a about us component

	-all these components that we have created are functions isn't

	-each component is a different function

	-according to the priciple each of the component should have single responsbility 

	-if you have multiple things in your component you should have break it in to different component

	MODULARITY = you breakdown your code into different different small modules.so that your codebecomes more maintanable and more testable


CUSTOM HOOKS:
 - WE CAN USE THESE CUSTOM HOOKS MAKE OUR CODE MORE MODULAR
 - TO ABSTRACT THE RESPONSIBILITY,EXTRA RESPONSIBILTIIES FORM THESE COMPONENTS TO A DIFFERENT HOOK
 - HOOKS ARE LIKE JUST A UTILITY FUNCTIONS