return (
  <div
    style={{
      // backgroundColor: 'rgb(18, 18, 18)',
      backgroundColor: 'yellow',
      display: 'grid',
      gridTemplateRows: '1fr 6fr'
    }}
  >
    {/* top container */}
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 1fr 1fr'
      }}
    >

      <div
        style={{
          backgroundColor: 'grey',
        }}
      >
        {/* Search Bar */}
        <div
          style={{
            borderRadius: '30px',
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'rgb(40, 40, 40)',
            border: focus ? '2px solid white' : 'none',
          }}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        >
          <div
            style={{
              width: '42px',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',

            }}
          >
            S
          </div>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            tabIndex="0"
            style={{
              background: 'transparent',
              width: '266px',
              border: 'none',
              color: 'white',
              outline: 'none',
            }}
          />
          <div
          >
            X
          </div>
        </div>

        {/* Radio buttons */}
        <div
          style={{
            backgroundColor: 'green',
          }}
        >
          <div
            style={{
              display: 'flex',
              flex: 'row'
            }}
          >
            <div
              style={{
                backgroundColor: radio === 'artist' ? 'white' : 'rgb(40, 40, 40)',
                borderRadius: '36px',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: '14px',
                alignItems: 'center',
                cursor: 'pointer',
                color: radio === 'artist' ? 'black' : 'white'
              }}
              onClick={() => setRadio('artist')}
            >
              Artists
            </div>

            <div
              style={{
                backgroundColor: radio === 'track' ? 'white' : 'rgb(40, 40, 40)',

                borderRadius: '36px',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: '14px',
                alignItems: 'center',
                cursor: 'pointer',
                color: radio === 'track' ? 'black' : 'white'
              }}
              onClick={() => setRadio('track')}
            >
              Songs
            </div>

            <div
              style={{
                backgroundColor: radio === 'album' ? 'white' : 'rgb(40, 40, 40)',
                borderRadius: '36px',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: '14px',
                alignItems: 'center',
                cursor: 'pointer',
                color: radio === 'album' ? 'black' : 'white'
              }}
              onClick={() => setRadio('album')}
            >
              Albums
            </div>
          </div>

        <div>special</div>

        </div>


      </div>
    </div>


    {/* bottom container */}
    <div
      style={{
        backgroundColor: 'orange',

      }}
    >




      {/* render container */}

      <div
        style={{
          position: 'relative',
          backgroundColor: 'lightRed',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridGap: '2px',
            position: 'absolute',
            overflowY: 'scroll',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}
        >
          {radio === 'track' &&
            <div>render tracks</div>
          }
          {radio === 'album' &&
            results?.albums.items.map((item, index) => (
              <Collection
                key={index}
                item={item}
              />
            ))
          }
          {radio === 'artist' &&
            <div>render artists</div>
          }
        </div>
      </div>
    </div>
  </div>
);