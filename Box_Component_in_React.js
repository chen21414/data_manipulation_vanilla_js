//https://jsmanifest.com/build-a-powerful-reusable-box-component-in-react/

//method 1
import React from 'react'

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export default function App() {
  return (
    <Box
      style={{
        backgroundColor: '#333',
        borderRadius: 4,
        color: '#eee',
        minHeight: 200,
        padding: 12,
        width: 300,
      }}
    >
      Sally Montgomery
    </Box>
  )
}


//method 2
function Box({
    children,
    backgroundColor,
    border,
    borderRadius,
    color,
    overflow,
    fontFamily,
    fontSize,
    fontWeight,
    minHeight,
    margin,
    padding,
    width,
    textAlign,
    style,
    ...props
  }) {
    return (
      <div
        {...props}
        style={{
          border,
          backgroundColor,
          borderRadius,
          color,
          fontFamily,
          fontSize,
          fontWeight,
          overflow,
          minHeight,
          margin,
          padding,
          width,
          textAlign,
          ...style,
        }}
      >
        {children}
      </div>
    )
  }

  export default function App() {
    return (
      <Box
        backgroundColor="#333"
        borderRadius={4}
        color="#eee"
        minHeight={200}
        padding={12}
        width={300}
      >
        Sally Montgomery
      </Box>
    )
  }

  //created as a card
  export default function App() {
    return (
      <Box
        backgroundColor="#333"
        borderRadius={4}
        color="#eee"
        minHeight={200}
        padding={12}
        width={300}
      >
        <Box>
          <img alt="Profile" src="./images/woman.png" style={{ width: 70 }} />
        </Box>
        <Box>Sally Montgomery</Box>
        <Box>
          About me: I am a hard working individual who strives for success. I have
          a puppy named Cookie that I love very much because she always prevents
          me from falling into emotional thoughts and keeps me going.
        </Box>
        <Box></Box>
      </Box>
    )
  }

  //we need to apply some spacing, font styling, and border to our female image 
  export default function App() {
    return (
      <Box
        backgroundColor="#333"
        borderRadius={4}
        color="#eee"
        minHeight={200}
        padding={20}
        width={300}
      >
        <Box
          width={80}
          border="4px solid cyan"
          backgroundColor="#fff"
          borderRadius="50%"
          overflow="hidden"
        >
          <img alt="Profile" src={woman} style={{ width: '100%' }} />
        </Box>
        <Box fontFamily="Helvetica" fontSize="1.3rem" padding="10px 0">
          Sally Montgomery
        </Box>
        <Box fontFamily="Helvetica" fontWeight={300}>
          About me: I am a hard working individual who strives for success. I have
          a puppy named Cookie that I love very much because she always prevents
          me from falling into emotional thoughts and keeps me going.
        </Box>
        <Box></Box>
      </Box>
    )
  }

  //make our Box default to these props in font
  function Box({
    children,
    backgroundColor,
    border,
    borderRadius,
    color,
    overflow,
    fontFamily = 'Helvetica',
    fontSize = '1rem',
    fontWeight = 300,
    minHeight,
    margin,
    padding,
    width,
    textAlign,
    style,
    ...props
  }) {
    return (
      <div
        {...props}
        style={{
          border,
          backgroundColor,
          borderRadius,
          color,
          fontFamily,
          fontSize,
          fontWeight,
          overflow,
          minHeight,
          margin,
          padding,
          width,
          textAlign,
          ...style,
        }}
      >
        {children}
      </div>
    )
  }

  //Now we can remove some code in our App since our Box handles them by default:
  export default function App() {
    return (
      <Box
        backgroundColor="#333"
        borderRadius={4}
        color="#eee"
        minHeight={200}
        padding={20}
        width={300}
      >
        <Box
          width={80}
          border="4px solid cyan"
          backgroundColor="#fff"
          borderRadius="50%"
          overflow="hidden"
        >
          <img alt="Profile" src={woman} style={{ width: '100%' }} />
        </Box>
        <Box fontSize="1.3rem" padding="10px 0">
          Sally Montgomery
        </Box>
        <Box>
          About me: I am a hard working individual who strives for success. I have
          a puppy named Cookie that I love very much because she always prevents
          me from falling into emotional thoughts and keeps me going.
        </Box>
        <Box></Box>
      </Box>
    )
  }

  //more complex reusable components
  function Card({ avatar, title, children, ...rootProps }) {
    return (
      <Box
        backgroundColor="#333"
        borderRadius={4}
        color="#eee"
        minHeight={200}
        padding={20}
        width={300}
        {...rootProps}
      >
        {avatar ? (
          <Box
            width={80}
            border="4px solid cyan"
            backgroundColor="#fff"
            borderRadius="50%"
            overflow="hidden"
          >
            {avatar}
          </Box>
        ) : null}
        {title ? (
          <Box fontSize="1.3rem" padding="10px 0">
            {title}
          </Box>
        ) : null}
        {children ? <Box>{children}</Box> : null}
      </Box>
    )
  }
  
  export default function App() {
    return (
      <Card
        avatar={<img alt="Profile" src={woman} style={{ width: '100%' }} />}
        title="Sally Montgomery"
      >
        About me: I am a hard working individual who strives for success. I have a
        puppy named Cookie that I love very much because she always prevents me
        from falling into emotional thoughts and keeps me going.
      </Card>
    )
  }

// We can call it a day here. But if you look closely, 
// we are starting to see Box everywhere so it eventually brings up the previous problem of writing boilerplate code again.

// There is a powerful strategy that some react libraries take advantage of which we can use for our Box component. 
// We can declare a parameter that allows the parent to pass in a custom react element, element tag, or component as a prop:

function Box({
    as: asProp = 'div',
    children,
    backgroundColor,
    border,
    borderRadius,
    color,
    overflow,
    fontFamily = 'Helvetica',
    fontSize = '1rem',
    fontWeight = 300,
    minHeight,
    margin,
    padding,
    width,
    textAlign,
    style,
    ...props
  }) {
    const Component = asProp
  
    return (
      <Component
        {...props}
        style={{
          border,
          backgroundColor,
          borderRadius,
          color,
          fontFamily,
          fontSize,
          fontWeight,
          overflow,
          minHeight,
          margin,
          padding,
          width,
          textAlign,
          ...style,
        }}
      >
        {children}
      </Component>
    )
  }

//Less Resources
//With that in place it can become handy when used in places like our Card:
function Card({avatar, title, children, ...rootProps}) {
    return (
        <Box
            backgroundColor='#333'
            borderRadius={4}
            color='#eee'
            minHeight={200}
            padding={20}
            width={300}
            {...rootProps}
        >
            {avatar? (
                <Box
                // key point
                    as={typeof avatar === 'string' ? 'img' : undefined}
                    width={80}
                    border='4px solid cyan'
                    backgroundColor='#fff'
                    borderRadius='50%'
                    overflow='hidden'
                // key point
                    src={typeof avatar === 'string' ? avatar : undefined}
                >
                    {typeof avatar === 'string' ? null : avatar}
                </Box>
            ) : null}
            {title ? (
                <Box fontSize='1.3rem' padding='10px 0'>
                    {title}
                </Box>
            ) : null}
            {children ? <Box>{children}</Box> : null}
        </Box>
    )
}


// Doing this provides a nice benefit: We remove one "less component" being created in the virtual dom. 
// When used extensively in more components, your GPU will thank you.

// Promoting Laziness
// One other thing. It also enables use to apply props in lazy ways. 
// For example below when we render our avatar props since Box can be a component we can directly take advantage of that and be super lazy like this:

const getCardAvatarProps = (avatar) => {
    return {
      as: 'img',
      width: 80,
      border: '4px solid cyan',
      backgroundColor: '#fff',
      borderRadius: '50%',
      overflow: 'hidden',
      ...(typeof avatar === 'string'
        ? { src: avatar }
        : React.isValidElement(avatar) //check if jsx component
        ? { children: avatar }
        : avatar),
    }
  }
  
  function Card({ avatar, title, children, ...rootProps }) {
    return (
      <Box
        backgroundColor="#333"
        borderRadius={4}
        color="#eee"
        minHeight={200}
        padding={20}
        width={300}
        {...rootProps}
      >
        <Box {...getCardAvatarProps(avatar)} />
        {title ? (
          <Box fontSize="1.3rem" padding="10px 0">
            {title}
          </Box>
        ) : null}
        {children ? <Box>{children}</Box> : null}
      </Box>
    )
  }





// Presets
// And another useful thing we can add to our Box is to allow some set of "presets" for certain props.

// For example, we can allow fontSize to be passed in as 'xl', 'lg', 'md', 'sm', or 'xs'. 
// If none of those are provided then it will just apply the value provided. 
// This pushes the Box even further in its capabilities in being easier to work with:
function Box({
    as: asProp = 'div',
    children,
    backgroundColor,
    border,
    borderRadius,
    color,
    mode = 'default',
    overflow,
    fontFamily = 'Helvetica',
    fontSize = '1rem',
    fontWeight = 300,
    minHeight,
    margin,
    padding,
    width,
    textAlign,
    style,
    ...props
  }) {
    const Component = asProp
  
    let modeStyles
  
    if (mode === 'modal') {
      modeStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '12px solid #19A8F7',
        flexDirection: 'column',
        backgroundColor: '#1F3F50',
        color: '#eee',
      }
    } else if (mode === 'card') {
      modeStyles = {
        backgroundColor: '#fff',
        color: 'rgba(0, 0, 0, 0.75)',
        paddingBottom: 30,
      }
    }
  
    const otherStyles = {
      border,
      backgroundColor,
      borderRadius,
      color,
      fontFamily,
      fontSize,
      fontWeight,
      overflow,
      minHeight,
      margin,
      padding,
      width,
      textAlign,
    }
  
    if (fontSize) {
      if (fontSize === 'xl') otherStyles.fontSize = '2rem'
      else if (fontSize === 'lg') otherStyles.fontSize = '1.5rem'
      else if (fontSize === 'md') otherStyles.fontSize = '1.2rem'
      else if (fontSize === 'sm') otherStyles.fontSize = '1rem'
      else if (fontSize === 'xs') otherStyles.fontSize = '0.8rem'
    }
  
    return (
      <Component
        {...props}
        style={{
          ...otherStyles,
          ...style,
          ...modeStyles,
        }}
      >
        {children}
      </Component>
    )
  }


//The Card component doesn't even have to know about it and could just forward props to get the benefits it provides. 
//For example in handling the title prop it can just take in an object and call it a day:

const getCardTitleProps = (title) => {
    return typeof title === 'string' ? { children: title } : title
  }
  
  function Card({ avatar, title, children, mode, ...rootProps }) {
    return (
      <Box
        backgroundColor="#333"
        borderRadius={4}
        color="#eee"
        minHeight={200}
        padding={20}
        width={300}
        mode={mode}
        {...rootProps}
      >
        {avatar ? (
          <Box
            as={typeof avatar === 'string' ? 'img' : undefined}
            width={80}
            border="4px solid cyan"
            backgroundColor="#fff"
            borderRadius="50%"
            overflow="hidden"
            src={typeof avatar === 'string' ? avatar : undefined}
          >
            {typeof avatar === 'string' ? null : avatar}
          </Box>
        ) : null}
        <Box fontSize="1.3rem" padding="10px 0" {...getCardTitleProps(title)} />
        {children ? <Box>{children}</Box> : null}
      </Box>
    )
  }


//One last thing I want to mention here is what I like to do for my Box components that are specialized for my app. 
//Its useful to create a mode prop that will switch styles according to the situation which will trigger a different "feel" to it:

function Box({
    as: asProp = 'div',
    children,
    backgroundColor,
    border,
    borderRadius,
    color,
    mode = 'default',
    overflow,
    fontFamily = 'Helvetica',
    fontSize = '1rem',
    fontWeight = 300,
    minHeight,
    margin,
    padding,
    width,
    textAlign,
    style,
    ...props
  }) {
    const Component = asProp
  
    let modeStyles
  
    if (mode === 'modal') {
      modeStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '12px solid #19A8F7',
        flexDirection: 'column',
        backgroundColor: '#1F3F50',
        color: '#eee',
      }
    } else if (mode === 'card') {
      modeStyles = {
        backgroundColor: '#fff',
        color: 'rgba(0, 0, 0, 0.75)',
        paddingBottom: 30,
      }
    }
  
    return (
      <Component
        {...props}
        style={{
          border,
          backgroundColor,
          borderRadius,
          color,
          fontFamily,
          fontSize,
          fontWeight,
          overflow,
          minHeight,
          margin,
          padding,
          width,
          textAlign,
          ...style,
          ...modeStyles,
        }}
      >
        {children}
      </Component>
    )
  }

  export default function App() {
    return (
      <Card avatar={woman} title="Sally Montgomery" mode="modal">
        About me: I am a hard working individual who strives for success. I have a
        puppy named Cookie that I love very much because she always prevents me
        from falling into emotional thoughts and keeps me going.
      </Card>
    )
  }

  //changing style
  export default function App() {
    return (
      <Card avatar={woman} title="Sally Montgomery" mode="card">
        About me: I am a hard working individual who strives for success. I have a
        puppy named Cookie that I love very much because she always prevents me
        from falling into emotional thoughts and keeps me going.
      </Card>
    )
  }
