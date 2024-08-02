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
	
